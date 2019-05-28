import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { TempDirectoryComponent } from './temp-directory/temp-directory.component';
import { DirectoryComponent } from './directory/directory.component';
import { ContactsRoutingModule } from './contacts-routing.module';

@NgModule({
  declarations: [
    ContactsComponent,
    NavBarComponent,
    ContactDetailComponent,
    ContactListComponent,
    TempDirectoryComponent,
    DirectoryComponent]
    ,
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
