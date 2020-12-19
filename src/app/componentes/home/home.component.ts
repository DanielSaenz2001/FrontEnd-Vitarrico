import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/servicios/JarwisService';
import { TokenService } from 'src/app/servicios/TokenService';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/AuthService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/UsuariosService';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private token: TokenService, private jarwis:JarwisService,
    private Auth: AuthService,private router: Router,
    private usuariosService: UsuariosService,private formBuild: FormBuilder) { }

    datos;
    tipo;
    tipo2;
    UsuarioForm: FormGroup;
    RepetirForm: FormGroup;
    ListUsuarios;
    Reportes;
    public reportesForm={
      idEmpleadoReporte:null
    }


  ngOnInit(): void {
    this.UsuarioForm = this.formBuild.group({
      id:  [''],
      name: ['',[Validators.required]],
      email: ['',[Validators.required]],
      area: [{value: '',disabled: true}],
      rol: [{value: '',disabled: true}],
      dni: [{value: '',disabled: true}],
      imagen_user:['',[Validators.required]],
      autorizado: [{disabled: true}],
      email_verified_at:[''],
      created_at:[''],
      updated_at:[''],
    });
    this.RepetirForm = this.formBuild.group({
      id:  [''],
      email: ['',[Validators.required]],
      password: ['',[Validators.required]],
      password_confirmation: ['',[Validators.required]],
      password_new: ['',[Validators.required]],
    });
    this.tipo2="vista";
    
    this.jarwis.me(this.token.getAuth()).subscribe(response=>{
      this.ListUsuarios=response

        this.usuariosService.getById(this.token.getID(), this.token.getAuth()).subscribe(response=>{
          console.log(response)
          this.UsuarioForm.setValue(response);
        })
    },
    error=>{
      this.token.removeAuth();
      this.token.removeID();
      this.token.removeRole();
      this.Auth.changeAuthStatus(false);
      this.router.navigateByUrl('/');
    })
  }
  ListEmpleado
  rol
  cambiar(tipo2){
    this.tipo2=tipo2;
  }
  actualizar(){
      this.usuariosService.updateImagen(this.token.getID(),
        this.UsuarioForm.value,this.token.getAuth()).subscribe(response=>{
          location.reload();
      })
  }
  contra(){
    this.usuariosService.updateContra(this.RepetirForm.value,this.token.getAuth()).subscribe(response=>{
      location.reload();
    })
  }
}
