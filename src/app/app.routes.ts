// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { ListOfContactsComponent } from './components/list-of-contacts/list-of-contacts.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

export const routes: Routes = [
  { path: '', component: ListOfContactsComponent },      // Default route
  { path: 'add-contact', component: ContactFormComponent } // Route to add a contact
];
