import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/TokenService';
import { ProveedoresService } from 'src/app/servicios/ProveedoresService';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
//import { ProveedoresService } from 'src/app/servicios/ProveedoresService';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  faCoffee = faInfoCircle;
  Listproveedores;
  constructor(private proveedor:ProveedoresService,
    private token:TokenService) { }

  ngOnInit(): void {
    this.Proveedores();
  }
  Proveedores(){
    this.proveedor.list(this.token.getAuth()).subscribe(response=>{
      this.Listproveedores=response
    })
  }
}
