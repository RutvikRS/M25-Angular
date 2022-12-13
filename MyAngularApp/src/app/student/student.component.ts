import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  /*External Style */
  //styleUrls: ['./student.component.css']
  /*Internal Style in the component File*/
  styles:[`table{
    color:black;
    font-family: 'Courier New', Courier, monospace;
    font-size: large;
    border-collapse: collapse;
  }
  
  td{
   border: 1px solid black;
  }`]
})
export class StudentComponent {

  Name:string="Rutvik";
  Email:string="rutviksakpal@gmail.com";

}
