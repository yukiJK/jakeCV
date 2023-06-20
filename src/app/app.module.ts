import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//otros modulos
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ResumenComponent } from './resumen/resumen.component';

@NgModule({
  declarations: [
    AppComponent,
    PortafolioComponent,
    BlogComponent,
    ContactoComponent,
    ResumenComponent
  ],
  imports: [
    BrowserModule,
    //otros modulos
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
