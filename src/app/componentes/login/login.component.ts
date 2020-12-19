import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/servicios/JarwisService';
import { TokenService } from 'src/app/servicios/TokenService';
import { AuthService } from 'src/app/servicios/AuthService';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token ;
  public form = {
    email: null,
    password: null,
  };
  user;
  empleado;
  public error = null;
  tipo;
  constructor(private Jarwis: JarwisService,private Token: TokenService,
    private router: Router,private Auth: AuthService,private route: ActivatedRoute
  ) { }
  onSubmit() {
    this.Jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
      
    );
  }
  handleResponse(data) {
    this.Jarwis.me(data.access_token).subscribe(token=>{
      this.user=token
      
      this.Token.handleAuth(data.access_token);
      this.Token.handleRole(this.user.rol);
      this.Token.handleID(this.user.id)
      this.Auth.changeAuthStatus(true);
      this.router.navigateByUrl('/home');

    })
  }
  ocultar(){
    this.error=null
  }
  handleError(error) {
    console.log(error)
    this.error = error.error.mensaje;
    console.log(this.error)
    if(this.error == undefined){
      this.error = "Usuario o contraseña Erroneas";
    }
  }

  ngOnInit(): void {
    this.tipo="Usuario";
  }
}