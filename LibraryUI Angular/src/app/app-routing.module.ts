import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookingConfirmationComponent } from './components/booking-confirmation/booking-confirmation.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VendorPageComponent } from './components/vendor-page/vendor-page.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'vendor-page', component:VendorPageComponent},
  {path:'all-books', component:AllBooksComponent},
  {path:'book-form', component:BookFormComponent},
  {path:'booking-confirmation', component: BookingConfirmationComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
