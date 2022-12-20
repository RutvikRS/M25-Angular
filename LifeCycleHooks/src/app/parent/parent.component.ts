import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{
  userName="RutvikRS45";
  constructor(){
  }
  //Second LifeCycleHook Method ie. ngOnInit
  //After first ngOnChanges() the ngOnInit() Hooks will execute
  ngOnInit(): void{
    console.log("ngOnInit from parent component");
  }

  //first it will call to constructor and then it will call to a function
  updateUser()
  {
    this.userName="Rutvik Sakpal";
  }
}
