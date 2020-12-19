import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/UsuariosService';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenService } from 'src/app/servicios/TokenService';
import { JarwisService } from 'src/app/servicios/JarwisService';
@Component({
  selector: 'app-formusuario',
  templateUrl: './formusuario.component.html',
  styleUrls: ['./formusuario.component.css']
})
export class FormusuarioComponent implements OnInit {

  constructor(private token: TokenService, private route: ActivatedRoute,
    private formBuild: FormBuilder, private UsuariosService: UsuariosService,
    private jarwis:JarwisService,private router: Router) { }
    ListUsuario;
    tipo;
    public error = null;
    UsuarioForm: FormGroup;
    UsuarioCreateForm: FormGroup;
    btnDisable;
    ngOnInit(): void {
      this.btnDisable=false
      let id = this.route.snapshot.paramMap.get('id').toString();
      this.UsuarioForm = this.formBuild.group({
        id:  [''],
        name: ['',[Validators.required]],
        email: ['',[Validators.required]],
        area: ['',[Validators.required]],
        rol: ['',[Validators.required]],
        dni: ['',[Validators.required]],
        imagen_user:['',[Validators.required]],
        autorizado: ['',[Validators.required]],
        email_verified_at:[''],
        created_at:[''],
        updated_at:[''],
      });
      this.UsuarioCreateForm = this.formBuild.group({
        id:  [''],
        name: ['',[Validators.required]],
        email: ['',[Validators.required]],
        area: ['',[Validators.required]],
        rol: ['',[Validators.required]],
        dni: ['',[Validators.required]],
        imagen_user:['',[Validators.required]],
        autorizado: ['',[Validators.required]],
        password: ['',[Validators.required]],
      });
      if(id == "crear"){
        console.log(id)
        this.tipo="crear";
      }else{
        this.UsuariosService.getById(id,this.token.getAuth()).subscribe(response=>{
          this.ListUsuario=response;
          console.log(response)
          this.tipo="update";
          this.UsuarioForm.setValue(response);
        })
      }
    }
    usuario;
    actualizar(){
      console.log(this.UsuarioForm.value)
      this.UsuariosService.update(this.UsuarioForm.value.id,this.UsuarioForm.value,this.token.getAuth()).subscribe(
        response=>{
          location.reload();
      })
    }
    ocultar(){
      this.error=null
    }
    crear(){
      console.log(this.UsuarioCreateForm.value)
      this.jarwis.signupadministrador(this.UsuarioCreateForm.value,this.token.getAuth()).subscribe(
        response=>{
          this.router.navigate(['/usuarios']);
        },
        error=>{this.error = error.error.mensaje;console.log(this.error) })
    }
}
