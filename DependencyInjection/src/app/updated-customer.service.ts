import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdatedCustomerService {
  private static count=0;

  constructor() { 
    UpdatedCustomerService.count=UpdatedCustomerService.count+1;
    console.log(UpdatedCustomerService.count);
  }
  display(name: string)
  {
    return "Updated "+name;
  }
  
}
