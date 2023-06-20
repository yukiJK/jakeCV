import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CvjakeService {

  profesional: any[] = [];
  educacion: any[] = [];
  experiencia: any[] = [];
  servicio: any[] = [];
  testimonio: any[] = [];


  constructor(private http: HttpClient) {
    this.CargaProfesional();
    this.CargaEducacion();
    this.CargaExperiencia();
    this.CargaServicio();
    this.CargaTestimonio();
   }
   private CargaProfesional(){
    this.http.get('https://cvjake-7144e-default-rtdb.firebaseio.com/Profesional.json')
      .subscribe((resp: any) => {
        this.profesional = resp;
        //console.log(resp);
      });
   }

   private CargaEducacion(){
    this.http.get('https://cvjake-7144e-default-rtdb.firebaseio.com/Educacion.json')
      .subscribe((resp: any) => {
        this.educacion = resp;
        //console.log(resp);
      });
   }

   private CargaExperiencia(){
    this.http.get('https://cvjake-7144e-default-rtdb.firebaseio.com/Experiencia.json')
      .subscribe((resp: any) => {
        this.experiencia = resp;
        console.log(resp);
      });
   }

   private CargaServicio(){
    this.http.get('https://cvjake-7144e-default-rtdb.firebaseio.com/Servicios.json')
      .subscribe((resp: any) => {
        this.servicio = resp;
        console.log(resp);
      });
   }

   private CargaTestimonio(){
    this.http.get('https://cvjake-7144e-default-rtdb.firebaseio.com/Testimonio.json')
      .subscribe((resp: any) => {
        this.testimonio = resp;
        //console.log(resp);
      });
   }

}
