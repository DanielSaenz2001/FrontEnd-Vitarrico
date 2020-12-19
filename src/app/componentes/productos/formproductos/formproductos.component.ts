import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenService } from 'src/app/servicios/TokenService';
import { JarwisService } from 'src/app/servicios/JarwisService';
import { ProductosService } from 'src/app/servicios/ProductosService';

@Component({
  selector: 'app-formproductos',
  templateUrl: './formproductos.component.html',
  styleUrls: ['./formproductos.component.css']
})
export class FormproductosComponent implements OnInit {

  constructor(private token: TokenService, private route: ActivatedRoute,
    private formBuild: FormBuilder, private productosService: ProductosService,
    private jarwis:JarwisService,private router: Router) { }

    ListProducto;
    tipo;
    public error = null;
    ProductoForm: FormGroup;
    btnDisable;
    ngOnInit(): void {
      this.btnDisable=false
      let id = this.route.snapshot.paramMap.get('id').toString();

      this.ProductoForm = this.formBuild.group({
        id:  [''],
        nombre: ['',[Validators.required]],
        stock : ['',[Validators.required]],
        descripcion: ['',[Validators.required]],
        unidad:['',[Validators.required]],
        modelo : ['',[Validators.required]],
        precio_total:['',[Validators.required]],
        codigo_producto :['',[Validators.required]],
        imagen_producto :['']
      });
      if(id == "crear"){
        this.tipo="crear";
      }else{
        this.productosService.getById(id,this.token.getAuth()).subscribe(response=>{
          this.ListProducto=response;
          console.log(response)
          this.tipo="update";
          this.ProductoForm.setValue(response);
        })
      }
    }
    usuario;
    actualizar(){
      console.log(this.ProductoForm.value)
      this.productosService.update(this.ProductoForm.value.id,this.ProductoForm.value,this.token.getAuth()).subscribe(
        response=>{
          location.reload();
      })
    }
    ocultar(){
      this.error=null
    }
    crear(){
      console.log(this.ProductoForm.value)
      this.productosService.create(this.ProductoForm.value,this.token.getAuth()).subscribe(
        response=>{
          this.router.navigate(['/prima']);
        },
        error=>{this.error = error.error.mensaje;console.log(this.error) })
    }

}
