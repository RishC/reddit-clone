import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'register', component: AuthComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AuthComponent],
  exports: [RouterModule]
})
export class AuthModule { }
