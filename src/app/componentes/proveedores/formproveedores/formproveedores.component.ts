import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenService } from 'src/app/servicios/TokenService';
import { JarwisService } from 'src/app/servicios/JarwisService';
import { ProveedoresService } from 'src/app/servicios/ProveedoresService';

@Component({
  selector: 'app-formproveedores',
  templateUrl: './formproveedores.component.html',
  styleUrls: ['./formproveedores.component.css']
})
export class FormproveedoresComponent implements OnInit {

  constructor(private token: TokenService, private route: ActivatedRoute,
    private formBuild: FormBuilder, private proveedoresService: ProveedoresService,
    private jarwis:JarwisService,private router: Router) { }

    ListUsuario;
    tipo;
    public error = null;
    ProveedorForm: FormGroup;
    btnDisable;
    ngOnInit(): void {
      this.btnDisable=false
      let id = this.route.snapshot.paramMap.get('id').toString();

      this.ProveedorForm = this.formBuild.group({
        id:  [''],
        nombre: ['',[Validators.required]],
        ruc : ['',[Validators.required]],
        direccion: ['',[Validators.required]],
        tipo:['',[Validators.required]],
        correo_electronico : ['',[Validators.required]],
        responsable:[''],
        imagen_proveedores:[''],
        telefono :[''],
        codigo_proveedor :[''],
      });

      if(id == "crear"){
        this.tipo="crear";
      }else{
        this.proveedoresService.getById(id,this.token.getAuth()).subscribe(response=>{
          this.ListUsuario=response;
          console.log(response)
          this.tipo="update";
          this.ProveedorForm.setValue(response);
        })
      }
    }
    usuario;
    actualizar(){
      console.log(this.ProveedorForm.value)
      this.proveedoresService.update(this.ProveedorForm.value.id,this.ProveedorForm.value,this.token.getAuth()).subscribe(
        response=>{
          location.reload();
      })
    }
    ocultar(){
      this.error=null
    }
    crear(){
      console.log(this.ProveedorForm.value)
      this.proveedoresService.create(this.ProveedorForm.value,this.token.getAuth()).subscribe(
        response=>{
          this.router.navigate(['/proveedores']);
        },
        error=>{this.error = error.error.mensaje;console.log(this.error) })
    }

}
