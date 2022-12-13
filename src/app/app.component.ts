import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /*Internal template*/
  template:`<div>
  <!--Two-way Binding-->
    FullName:<input [value]='FullName' (input) = 'print()' >
   <br>
    <input [type]="FirstName" [(ngModel)]="twoway">
    {{twoway}}

    <br>
    You have Entered: {{FullName}}


  <!--Interpolation denoted by {}->
      <h1>{{"First Name: "+FirstName+" "+"Last Name:"+LastName}}</h1>
      <h2>11+5*7-3={{11+5*7-3}}</h2>
      <!--InnerHTML is a target and title is a source-->
      <!--Property Binding[]--->
      <span [innerHTML]='title'></span>
      <br>
      <img alt="item" [src]="itemImageUrl"/>
      <div>
        <button style="background-color: red">Submit</button>
        <button (click)="display()">Print</button> 
        
        <!--Event Binding-->
        </div>
        
         
      
     </div>`,
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Java Full Stack Program';
  FirstName:string = "Rutvik";
  LastName:string = "Sakpal";
  twoway:string="C2TC Program";
  FullName:string="Rutvik Sakpal";
  itemImageUrl="https://tnsindiafoundation.org/wp-content/uploads/2022/08/tnsif-logo-1.png";

  //function Event
  display():void
  {
    console.log("Congraulations! Button working successfully");
  }

  print():void
  {
    console.log("Huraah!!!!");
  }

}
