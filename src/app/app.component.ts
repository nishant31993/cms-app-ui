import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListOfContactsComponent } from './components/list-of-contacts/list-of-contacts.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ListOfContactsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cms-app-ui';
}
