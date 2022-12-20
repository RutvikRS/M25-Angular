import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

  getStudents():any[]
  {
    return[{ID: 1001, Name:"Rutvik Sakpal",Gender:"male",City:"Pune",Fee:25000},
    {ID: 1001, Name:"Vidya Paygude",Gender:"female",City:"Mumbai",Fee:65000},
    {ID: 1001, Name:"Pratik Kadam",Gender:"male",City:"Hyderabad",Fee:55000}]
  }
  constructor() { }
}
