
import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-of-contacts',
  imports: [ContactFormComponent],
  templateUrl: './list-of-contacts.component.html',
  styleUrl: './list-of-contacts.component.css'
})
export class ListOfContactsComponent implements OnInit {
  contacts: Contact[] = [];
  selectedContact: Contact | null = null;
  showModal = false;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.getContacts().subscribe((data) => {
      this.contacts = data;
    });
  }

  // To add new contact
  onAddContact() {
    this.selectedContact = null;
    this.showModal = true;
  }

  //To edit existing contact
  onEditContact(contact: Contact) {
    this.selectedContact = { ...contact };
    this.showModal = true;
  }

  onDeleteContact(contactId: number) {
    if (confirm('Are you sure you want to delete this contact?')) {
      this.contactService.deleteContact(contactId).subscribe(() => {
        this.loadContacts();
      });
    }
  }

  onCloseModal() {
    this.showModal = false;
  }

  onSaveContact(contact: Contact) {
    if (contact.id) {
      this.contactService.updateContact(contact).subscribe(() => {
        this.loadContacts();
      });
    } else {
      this.contactService.addContact(contact).subscribe(() => {
        this.loadContacts();
      });
    }
  }
}
