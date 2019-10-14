import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form.component';
import { ConfirmationPageComponent } from './components/confirmation-page.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'confirmation', component: ConfirmationPageComponent },
  { path: '**', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
