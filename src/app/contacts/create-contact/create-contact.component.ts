import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {

  createContactForm: FormGroup;
  @Output() createContact: EventEmitter<Contact>;

  constructor(private formBuilder: FormBuilder) {
    this.createContact = new EventEmitter<Contact>();
   }

  ngOnInit() {
    this.createContactForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      age: ['', Validators.required],
      identification: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.createContactForm.invalid === true) { return; }
    this.createContact.emit(this.createContactForm.value);
  }

}
