import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenService } from 'src/app/servicios/TokenService';
import { JarwisService } from 'src/app/servicios/JarwisService';
import { EmpaqueService } from 'src/app/servicios/EmpaqueService';

@Component({
  selector: 'app-formempaque',
  templateUrl: './formempaque.component.html',
  styleUrls: ['./formempaque.component.css']
})
export class FormempaqueComponent implements OnInit {

  constructor(private token: TokenService, private route: ActivatedRoute,
    private formBuild: FormBuilder, private empaqueService: EmpaqueService,
    private jarwis:JarwisService,private router: Router) { }

    ListProducto;
    tipo;
    public error = null;
    EmpaqueForm: FormGroup;
    btnDisable;
    ngOnInit(): void {
      this.btnDisable=false
      let id = this.route.snapshot.paramMap.get('id').toString();

      this.EmpaqueForm = this.formBuild.group({
        id:  [''],
        nombre: ['',[Validators.required]],
        stock : ['',[Validators.required]],
        descripcion: ['',[Validators.required]],
        peso_neto:['',[Validators.required]],
        peso_bruto : ['',[Validators.required]],
        medidas : ['',[Validators.required]],
        imagen_material_empaques:[''],
        codigo_materiales_empaques  :['',[Validators.required]]
      });
      if(id == "crear"){
        this.tipo="crear";
      }else{
        this.empaqueService.getById(id,this.token.getAuth()).subscribe(response=>{
          this.ListProducto=response;
          console.log(response)
          this.tipo="update";
          this.EmpaqueForm.setValue(response);
        })
      }
    }
    usuario;
    actualizar(){
      console.log(this.EmpaqueForm.value)
      this.empaqueService.update(this.EmpaqueForm.value.id,this.EmpaqueForm.value,this.token.getAuth()).subscribe(
        response=>{
          location.reload();
      })
    }
    ocultar(){
      this.error=null
    }
    crear(){
      console.log(this.EmpaqueForm.value)
      this.empaqueService.create(this.EmpaqueForm.value,this.token.getAuth()).subscribe(
        response=>{
          this.router.navigate(['/empaque']);
        },
        error=>{this.error = error.error.mensaje;console.log(this.error) })
    }

}
