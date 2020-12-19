import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/TokenService';
import { IngresoEmpaquesService } from 'src/app/servicios/IngresoEmpaquesService';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-compraempaque',
  templateUrl: './compraempaque.component.html',
  styleUrls: ['./compraempaque.component.css']
})
export class CompraempaqueComponent implements OnInit {

  faCoffee = faInfoCircle;
  ListCompra;
  constructor(private empaqueService:IngresoEmpaquesService,
    private token:TokenService) { }

    ngOnInit(): void {
      this.Productos();
    }
    Productos(){
      this.empaqueService.list(this.token.getAuth()).subscribe(response=>{
        console.log(response)
        this.ListCompra=response
      })
    }

}
