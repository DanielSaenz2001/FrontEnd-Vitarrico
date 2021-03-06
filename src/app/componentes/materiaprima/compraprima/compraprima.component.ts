import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/TokenService';
import { IngresoPrimasService } from 'src/app/servicios/IngresoPrimasService';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-compraprima',
  templateUrl: './compraprima.component.html',
  styleUrls: ['./compraprima.component.css']
})
export class CompraprimaComponent implements OnInit {

  faCoffee = faInfoCircle;
  ListCompra;
  constructor(private primaService:IngresoPrimasService,
    private token:TokenService) { }

    ngOnInit(): void {
      this.Productos();
    }
    Productos(){
      this.primaService.list(this.token.getAuth()).subscribe(response=>{
        console.log(response)
        this.ListCompra=response
      })
    }

}
