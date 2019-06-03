import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest, of } from 'rxjs';
import { Contact } from '../interfaces/contact';
import { ContactService } from '../services/contact.service';
import { take, map, tap, switchMap, catchError } from 'rxjs/operators';
import { IdType } from '../enums/id-type.enum';

@Component({
  selector: 'app-temp-directory',
  templateUrl: './temp-directory.component.html',
  styleUrls: ['./temp-directory.component.scss']
})
export class TempDirectoryComponent implements OnInit {

  tempContactsList$: Observable<Array<Contact>>;
  selectedContact: Contact;
  shouldCreateContact: boolean;
  private SCORE_LIMIT = 60;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getTempContacts();
    this.shouldCreateContact = false;
  }

  selectContact(contact: Contact) {
    this.shouldCreateContact = false;
    this.selectedContact = contact;
  }

  addContact() {
    this.shouldCreateContact = true;
  }

  createContact(contact: Contact) {
    contact.idType = IdType.CEDULA;
    this.contactService.createContact(contact).subscribe(response => {
      console.log('Temp Contact Created');
      this.shouldCreateContact = false;
      this.getTempContacts();
    }, error => {
      console.error('Was not able to crate a Temp Contact, try again later', error);
    });

  }

  validateContact(contact: Contact) {

    const citizenValidation$ = this.contactService.citizenValidation(contact);
    const legalValidation$ = this.contactService.legalValidation(contact);

    combineLatest(citizenValidation$, legalValidation$, (citizen, legal) => {
      return {citizen, legal};
    })
    .pipe(
      switchMap(response => {
        return this.citizenAndLegalValidation(response.citizen, response.legal, contact);
      })
    )
    .subscribe((response: any) => {
      this.contactScore(response, contact);
    });

  }

  cancelCreation() {
    this.shouldCreateContact = false;
  }

  private citizenAndLegalValidation(citizen, legal, contact: Contact) {
    console.log('The contact is a registered Citizen. ', citizen.citizen);
    console.log('The Contact has criminal recods', legal.records);

    if (citizen.citizen === true && legal.records === false) {
      return this.contactService.getScore(contact);
    } else {
      let message = (citizen.citizen === false) ? 'Is not a registered Citizen.' : '';
      message += (citizen.citizen === true) ? ' The Contact has criminal records.' : '';
      return of({error: true, message});
    }
  }

  private getTempContacts() {
    this.tempContactsList$ = this.contactService.getTempContacts();
    this.tempContactsList$
      .pipe(
        take(1)
      )
      .subscribe((contactsList: Array<Contact>) => {
        this.selectedContact = { ...contactsList[0] };
      });
  }

  private contactScore(response, contact: Contact) {

    if (response.error) {
      console.log('The contact was not able to pass the next validations: ', response.message);
      return;
    }
    if (response.score >= this.SCORE_LIMIT) {
      this.contactService.savePermanent(contact).subscribe(permSaved => {
        console.log('Contact has been saved permanently');
        this.getTempContacts();
      });
    } else {
      console.log(`Contact has a Score under ${this.SCORE_LIMIT}`);
    }
  }
}
