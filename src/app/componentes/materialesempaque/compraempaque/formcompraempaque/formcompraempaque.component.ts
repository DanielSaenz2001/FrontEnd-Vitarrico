import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/TokenService';
import { IngresoEmpaquesService } from 'src/app/servicios/IngresoEmpaquesService';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProveedorService } from 'src/app/servicios/ProveedorService';
import { EmpaqueService } from 'src/app/servicios/EmpaqueService';
import { CarritoService } from 'src/app/servicios/CarritoService';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-formcompraempaque',
  templateUrl: './formcompraempaque.component.html',
  styleUrls: ['./formcompraempaque.component.css']
})
export class FormcompraempaqueComponent implements OnInit {

  faCoffee = faInfoCircle;
  constructor(private token: TokenService, private route: ActivatedRoute,
    private ingresoEmpaquesService:IngresoEmpaquesService,private formBuild: FormBuilder,
    private proveedores:ProveedorService,private empaqueService:EmpaqueService,private carritoService:CarritoService
    ,private router: Router) { }

    ListCompra;
    ListCarrito;
    tipo;
    ListProveedores;
    public error = null;
    btnDisable;
    ListProductos;
    ListDetalles;
    InEmpaque: FormGroup;
    Carrito: FormGroup;
    CarritoUpdate: FormGroup;
    ngOnInit(): void {
      let id = this.route.snapshot.paramMap.get('id').toString();
      
      this.InEmpaque = this.formBuild.group({
        id:  [''],
        nFactura: ['',[Validators.required]],
        proveedor_id : ['',[Validators.required]],
        doc_completa: ['',[Validators.required]],
        observacion:['',[Validators.required]]
      });
      this.Carrito = this.formBuild.group({
        id:  [''],
        empaque_id: [''],
      });
      this.CarritoUpdate = this.formBuild.group({
        id:  [''],
        cantidad_empaque: [''],
        calidad: [''],
        laminacion: [''],
        color: [''],
      });
      if(id == "crear"){
        this.tipo="crear";
        this.proveedores.list(this.token.getAuth()).subscribe(response=>{
          this.ListProveedores=response
        })
        this.empaqueService.list(this.token.getAuth()).subscribe(response=>{
          this.ListProductos=response
        })
       this.listcarrito()
      }else{
          this.ingresoEmpaquesService.getById(id,this.token.getAuth()).subscribe(response=>{
            this.ListCompra=response;
            console.log(response)
            this.tipo="vista";
          })
          this.ingresoEmpaquesService.detalles(id,this.token.getAuth()).subscribe(response=>{
            this.ListDetalles=response;
            console.log("************************")
            console.log(response)
          })
      }
    }
    producto_id
    listcarrito(){
      this.carritoService.listEmpaque(this.token.getAuth()).subscribe(response=>{
        console.log(response)
        this.ListCarrito=response
      })
    }
    agregar(id){
      this.Carrito.value.empaque_id=id
      this.carritoService.createEmpaque(this.Carrito.value, this.token.getAuth()).subscribe(response=>{
        this.listcarrito()
      })
    }
    CarritoOne
    idcarritoprima(carrito){
      this.CarritoUpdate = this.formBuild.group({
        id:  [carrito.id],
        cantidad_empaque: [carrito.cantidad_empaque],
        calidad: [carrito.calidad],
        laminacion: [carrito.laminacion],
        color: [carrito.color],
      });
    }
    actualizar(){
      this.carritoService.updateEmpaque(this.CarritoUpdate.value.id,this.CarritoUpdate.value, this.token.getAuth()).subscribe(response=>{
        this.listcarrito()
      })
    }
    comprar(){
      this.ingresoEmpaquesService.create(this.InEmpaque.value, this.token.getAuth()).subscribe(response=>{
        this.router.navigate(['/compra/empaque']);
      })
    }

}
