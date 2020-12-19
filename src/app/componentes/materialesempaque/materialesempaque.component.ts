import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/TokenService';
import { EmpaqueService } from 'src/app/servicios/EmpaqueService';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-materialesempaque',
  templateUrl: './materialesempaque.component.html',
  styleUrls: ['./materialesempaque.component.css']
})
export class MaterialesempaqueComponent implements OnInit {

  faCoffee = faInfoCircle;
  Listproductos;
  constructor(private empaqueService:EmpaqueService,
    private token:TokenService) { }

    ngOnInit(): void {
      this.Productos();
    }
    Productos(){
      this.empaqueService.list(this.token.getAuth()).subscribe(response=>{
        console.log(response)
        this.Listproductos=response
      })
    }

}
