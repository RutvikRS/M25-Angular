import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  template:`<div>
  <p class="para">Hey Siri,Show me the Submit button</p>
  <button class="colorClass">Submit</button>
   
  </div>`,
  /*External template */
  //templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {


  company:string="Capegimini";
  contact:string="Rutvik";
  country:string="India";
  company1:string="Amazon";
  contact1:string="Suraj";
  country1:string="India";

}
