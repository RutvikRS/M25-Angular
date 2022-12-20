import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges{
  @Input() userName='';
  constructor(){}
  
  ngOnInit()
  {
    console.log('ngOnInit from Child Component');
  }
  //Fisrt Lifecycle Hooks ie ngOnChanhes()
  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges Triggerred",changes);

    if(!changes['userName'].isFirstChange())
    {
      if(changes['userName'].currentValue=='VrushaliVarankar')
      {
        this.userName="Welcome "+this.userName;
      }
      else
      {
        this.userName=changes['userName'].previousValue;
      }
    }
  } 
}
