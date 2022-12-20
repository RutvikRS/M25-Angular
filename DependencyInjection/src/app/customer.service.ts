import { Injectable } from '@angular/core';

//when we use 'root' it will create 1 object
@Injectable()
export class CustomerService {
  private static count=0;

  constructor() { 
    CustomerService.count=CustomerService.count+1;
    console.log(CustomerService.count);
  }
  display(name: string)
  {
    return "Welcome  to "+name;
  }
  print(name: string)
  {
    return "Welcome  to "+name;
  }
}
