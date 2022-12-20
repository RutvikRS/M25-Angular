import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

  getStudents():any[]
  {
    return[{ID: 1001, Name:"Vrushali Varankar",Gender:"female",City:"Pune",Fee:25000},
    {ID: 1001, Name:"Kalpesh Varankar",Gender:"male",City:"Mumbai",Fee:65000},
    {ID: 1001, Name:"Prayag Mali",Gender:"male",City:"Hyderabad",Fee:55000}]
  }
  constructor() { }
}
