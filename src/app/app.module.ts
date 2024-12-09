import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListOfContactsComponent } from './components/list-of-contacts/list-of-contacts.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ListOfContactsComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
