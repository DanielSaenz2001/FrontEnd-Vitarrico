import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/TokenService';
import { UsuariosService } from 'src/app/servicios/UsuariosService';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  faCoffee = faInfoCircle;
  Listusuarios;
  constructor(private UsuariosService: UsuariosService, private token:TokenService) { }

  ngOnInit(): void {
    this.ListUsuarios();
  }
  ListUsuarios(){
    this.UsuariosService.usuarios(this.token.getAuth()).subscribe(response=>{
      console.log(response)
      this.Listusuarios=response;
    })
  }

}
