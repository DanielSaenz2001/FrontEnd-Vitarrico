import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AfterLoginGuard } from './guards/AfterLoginGuard';
import { BeforeLoginGuard } from './guards/BeforeLoginGuard';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { ProveedoresComponent } from './componentes/proveedores/proveedores.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { FormusuarioComponent } from './componentes/usuarios/formusuario/formusuario.component';
import { FormproveedoresComponent } from './componentes/proveedores/formproveedores/formproveedores.component';
import { MateriaprimaComponent } from './componentes/materiaprima/materiaprima.component';
import { MaterialesempaqueComponent } from './componentes/materialesempaque/materialesempaque.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { FormempaqueComponent } from './componentes/materialesempaque/formempaque/formempaque.component';
import { FormprimaComponent } from './componentes/materiaprima/formprima/formprima.component';
import { FormproductosComponent } from './componentes/productos/formproductos/formproductos.component';
import { CompraprimaComponent } from './componentes/materiaprima/compraprima/compraprima.component';
import { FormcompraprimaComponent } from './componentes/materiaprima/compraprima/formcompraprima/formcompraprima.component';

const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [BeforeLoginGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AfterLoginGuard]},
  {path: 'usuarios', component: UsuariosComponent, canActivate: [AfterLoginGuard]},
  {path: 'usuarios/:id', component: FormusuarioComponent, canActivate: [AfterLoginGuard]},
  {path: 'proveedores', component: ProveedoresComponent, canActivate: [AfterLoginGuard]},
  {path: 'proveedores/:id', component: FormproveedoresComponent, canActivate: [AfterLoginGuard]},
  {path: 'prima', component: MateriaprimaComponent, canActivate: [AfterLoginGuard]},
  {path: 'prima/:id', component: FormprimaComponent, canActivate: [AfterLoginGuard]},
  {path: 'empaque', component: MaterialesempaqueComponent, canActivate: [AfterLoginGuard]},
  {path: 'empaque/:id', component: FormempaqueComponent, canActivate: [AfterLoginGuard]},
  {path: 'productos', component: ProductosComponent, canActivate: [AfterLoginGuard]},
  {path: 'productos/:id', component: FormproductosComponent, canActivate: [AfterLoginGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    ProveedoresComponent,
    UsuariosComponent,
    FormusuarioComponent,
    FormproveedoresComponent,
    MateriaprimaComponent,
    MaterialesempaqueComponent,
    ProductosComponent,
    FormempaqueComponent,
    FormprimaComponent,
    FormproductosComponent,
    CompraprimaComponent,
    FormcompraprimaComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
