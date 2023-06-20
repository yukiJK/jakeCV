import { Component, OnInit } from '@angular/core';
import { CvjakeService } from '../services/cvjake.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  constructor(public cv:CvjakeService){}


ngOnInit(): void{
  }


}
