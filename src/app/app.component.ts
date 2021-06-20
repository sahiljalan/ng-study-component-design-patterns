import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-study-component-design-patterns';
  popupToggle: boolean;

  togglePopup() {
    this.popupToggle = !this.popupToggle
  }
}


