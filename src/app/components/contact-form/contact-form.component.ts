import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  @Input() contact: Contact | null = null;
  @Output() closeModal = new EventEmitter<void>();
  @Output() saveContact = new EventEmitter<Contact>();
  
  contactForm: FormGroup;
  isEditMode = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnChanges() {
    if (this.contact) {
      this.isEditMode = true;
      this.contactForm.patchValue(this.contact);
    } else {
      this.isEditMode = false;
      this.contactForm.reset();
    }
  }

  onSubmit() {
    if (this.contactForm.invalid) return;

    const newContact: Contact = {
      ...this.contactForm.value,
      id: this.contact?.id ?? 0
    };

    this.saveContact.emit(newContact);
    this.closeModal.emit();
  }

  onClose() {
    this.closeModal.emit();
  }
}
