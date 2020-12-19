import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/TokenService';
import { PrimaService } from 'src/app/servicios/PrimaService';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-materiaprima',
  templateUrl: './materiaprima.component.html',
  styleUrls: ['./materiaprima.component.css']
})
export class MateriaprimaComponent implements OnInit {

  faCoffee = faInfoCircle;
  Listproductos;
  constructor(private primaService:PrimaService,
    private token:TokenService) { }

    ngOnInit(): void {
      this.Productos();
    }
    Productos(){
      this.primaService.list(this.token.getAuth()).subscribe(response=>{
        console.log(response)
        this.Listproductos=response
      })
    }

}
