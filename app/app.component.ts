import { Component, VERSION } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  version = 'Angular: v' + VERSION.full;
}
