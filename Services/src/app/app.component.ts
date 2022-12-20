import { Component } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService]
})
export class AppComponent {
  title = 'services';
  students:any[] | undefined;
  /*the DI is done using the class constructor and the actual service method call is
  issued from ngOnInit lifecycle hook*/ 
  constructor(private _studentService:StudentService)
  {
  }
  //after the constructor it called
  //calling to service method  by using ngOnInit()
  ngOnInit()
  {
    this.students=this._studentService.getStudents();
  }
}
