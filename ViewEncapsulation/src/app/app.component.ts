import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'ViewEncapsulation';
  // It refers to the way Angular components manage and isolate their styles and DOM elements from the rest of the application.
  // View encapsulation ensures that styles and behavior defined within a component don't interfere with or get affected by external styles or components, providing a level of modularity and separation of concerns.
}
