import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent implements OnInit { 
  constructor(private router: Router) { }
  numero:any;
  sueldos=[1700, 1600, 1900, 1880];
  ngOnInit(): void {
   
   }

}
