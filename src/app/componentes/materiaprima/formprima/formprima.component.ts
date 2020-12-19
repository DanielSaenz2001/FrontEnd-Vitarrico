import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenService } from 'src/app/servicios/TokenService';
import { JarwisService } from 'src/app/servicios/JarwisService';
import { PrimaService } from 'src/app/servicios/PrimaService';

@Component({
  selector: 'app-formprima',
  templateUrl: './formprima.component.html',
  styleUrls: ['./formprima.component.css']
})
export class FormprimaComponent implements OnInit {

  constructor(private token: TokenService, private route: ActivatedRoute,
    private formBuild: FormBuilder, private primaService: PrimaService,
    private jarwis:JarwisService,private router: Router) { }

    ListProducto;
    tipo;
    public error = null;
    PrimaForm: FormGroup;
    btnDisable;
    ngOnInit(): void {
      this.btnDisable=false
      let id = this.route.snapshot.paramMap.get('id').toString();

      /*this.PrimaForm = this.formBuild.group({
        id:  [''],
        nombre: ['',[Validators.required]],
        stock : ['',[Validators.required]],
        descripcion: ['',[Validators.required]],
        unidad:['',[Validators.required]],
        modelo : ['',[Validators.required]],
        precio_total:['',[Validators.required]],
        codigo_producto :['',[Validators.required]],
        imagen_producto :['']
      });*/
      this.PrimaForm = this.formBuild.group({
        id:  [''],
        nombre: ['',[Validators.required]],
        stock : ['',[Validators.required]],
        descripcion: ['',[Validators.required]],
        origen:['',[Validators.required]],
        unidad : ['',[Validators.required]],
        imagen_materias_primas:[''],
        codigo_materia_prima  :['',[Validators.required]]
      });
      if(id == "crear"){
        this.tipo="crear";
      }else{
        this.primaService.getById(id,this.token.getAuth()).subscribe(response=>{
          this.ListProducto=response;
          console.log(response)
          this.tipo="update";
          this.PrimaForm.setValue(response);
        })
      }
    }
    usuario;
    actualizar(){
      console.log(this.PrimaForm.value)
      this.primaService.update(this.PrimaForm.value.id,this.PrimaForm.value,this.token.getAuth()).subscribe(
        response=>{
          location.reload();
      })
    }
    ocultar(){
      this.error=null
    }
    crear(){
      console.log(this.PrimaForm.value)
      this.primaService.create(this.PrimaForm.value,this.token.getAuth()).subscribe(
        response=>{
          this.router.navigate(['/prima']);
        },
        error=>{this.error = error.error.mensaje;console.log(this.error) })
    }

}
