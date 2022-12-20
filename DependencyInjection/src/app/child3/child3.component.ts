import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component {
  message: string | undefined;

  //child 2 is dependent on customer service
  constructor(private cs:CustomerService){
  }
  ngOnInit(): void{
    this.message=this.cs.display("JAVA FULL STACK")
  }
}
