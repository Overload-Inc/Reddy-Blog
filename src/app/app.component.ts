import {Component} from '@angular/core';

@Component({
  selector: 'app-root', // Establishes the name of the component to be used outside
  templateUrl: './app.component.html', // Establishes the place which provides the look & feel for the component
  styleUrls: ['./app.component.css'] // Establishes the styles used for the component
})
export class AppComponent {
  // Variable to set the title of the AppComponent
  applicationTitle: string = 'Reddy Blog Site';

  constructor() {
  }
}
