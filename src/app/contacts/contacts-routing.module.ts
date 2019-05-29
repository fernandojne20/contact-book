import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';
import { TempDirectoryComponent } from './temp-directory/temp-directory.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ContactsComponent } from './contacts.component';

const routes: Routes = [
  {path: '', pathMatch: 'prefix', component: ContactsComponent,
  children: [
    {path: '', pathMatch: 'prefix', redirectTo: 'directory'},
    {path: 'directory', component: DirectoryComponent},
    {path: 'tempDirectory', component: TempDirectoryComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
