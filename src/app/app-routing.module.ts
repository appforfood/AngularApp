import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { adminHomeComponent } from './admin/home.component';
import { adminHomeModule } from './admin/home.module';

const routes: Routes = [
 { path:'', component : adminHomeComponent}
];

@NgModule({
  imports: [CommonModule,
    adminHomeModule,
    RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
