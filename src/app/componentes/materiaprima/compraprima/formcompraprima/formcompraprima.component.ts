import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/TokenService';
import { IngresoPrimasService } from 'src/app/servicios/IngresoPrimasService';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProveedorService } from 'src/app/servicios/ProveedorService';
import { PrimaService } from 'src/app/servicios/PrimaService';
import { CarritoService } from 'src/app/servicios/CarritoService';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-formcompraprima',
  templateUrl: './formcompraprima.component.html',
  styleUrls: ['./formcompraprima.component.css']
})
export class FormcompraprimaComponent implements OnInit {
  faCoffee = faInfoCircle;
  Remove = faTrash;
  constructor(private token: TokenService, private route: ActivatedRoute,
    private InprimaService:IngresoPrimasService,private formBuild: FormBuilder,
    private proveedores:ProveedorService,private primaService:PrimaService,private carritoService:CarritoService
    ,private router: Router) { }

  ListCompra;
  ListCarrito;
  tipo;
  ListProveedores;
  public error = null;
  btnDisable;
  ListProductos;
  ListDetalles;
  InPrima: FormGroup;
  Carrito: FormGroup;
  CarritoUpdate: FormGroup;
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id').toString();
    
    this.InPrima = this.formBuild.group({
      id:  [''],
      nFactura: ['',[Validators.required]],
      proveedor_id : ['',[Validators.required]],
      doc_completa: ['',[Validators.required]],
      observacion:['',[Validators.required]]
    });
    this.Carrito = this.formBuild.group({
      id:  [''],
      materias_primas_id: [''],
    });
    this.CarritoUpdate = this.formBuild.group({
      id:  [''],
      cantidad_materias: [''],
      integridad: [''],
      plagas: [''],
      materias_extranas: [''],
    });
    if(id == "crear"){
      this.tipo="crear";
      this.proveedores.list(this.token.getAuth()).subscribe(response=>{
        this.ListProveedores=response
      })
      this.primaService.list(this.token.getAuth()).subscribe(response=>{
        this.ListProductos=response
      })
     this.listcarrito()
    }else{
        this.InprimaService.getById(id,this.token.getAuth()).subscribe(response=>{
          this.ListCompra=response;
          console.log(response)
          this.tipo="vista";
        })
        this.InprimaService.detalles(id,this.token.getAuth()).subscribe(response=>{
          this.ListDetalles=response;
          console.log(response)
        })
    }
  }
  producto_id
  listcarrito(){
    this.carritoService.listPrima(this.token.getAuth()).subscribe(response=>{
      console.log(response)
      this.ListCarrito=response
    })
  }
  agregar(id){
    this.Carrito.value.materias_primas_id=id
    this.carritoService.createPrima(this.Carrito.value, this.token.getAuth()).subscribe(response=>{
      this.listcarrito()
    })
  }
  CarritoOne
  idcarritoprima(carrito){
    this.CarritoUpdate = this.formBuild.group({
      id:  [carrito.id],
      cantidad_materias: [carrito.cantidad_materias],
      integridad: [carrito.integridad],
      plagas: [carrito.plagas],
      materias_extranas: [carrito.materias_extranas],
    });
  }
  actualizar(){
    this.carritoService.updatePrima(this.CarritoUpdate.value.id,this.CarritoUpdate.value, this.token.getAuth()).subscribe(response=>{
      this.listcarrito()
    })
  }
  comprar(){
    this.InprimaService.create(this.InPrima.value, this.token.getAuth()).subscribe(response=>{
      this.router.navigate(['/compra/prima']);
    })
  }
  deletecarrito(id){
    this.carritoService.delete(id,this.token.getAuth()).subscribe(response=>{
      this.listcarrito()
    })
  }
}
