import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/TokenService';
import { ProductosService } from 'src/app/servicios/ProductosService';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  faCoffee = faInfoCircle;
  Listproductos;
  constructor(private productosService:ProductosService,
    private token:TokenService) { }

    ngOnInit(): void {
      this.Productos();
    }
    Productos(){
      this.productosService.list(this.token.getAuth()).subscribe(response=>{
        console.log(response)
        this.Listproductos=response
      })
    }

}
