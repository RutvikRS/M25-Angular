import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  //internal template
  template: `<h1>{{name1}}</h1>
            <body>
              Hey Siri, how to know more about Angular and TS?
            </body>
  `,
  /*External Template*/
  //templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {

  name1 = "Welcome to Skillsoft Platform";

}
