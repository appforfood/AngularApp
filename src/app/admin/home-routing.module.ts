import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { adminHomeComponent } from './home.component';
import { DashboardModule} from './template/dashboard/dashboard.module'
import { DashboardComponent} from './template/dashboard/dashboard.component'


const routes: Routes = [
 {path: '',
  component:adminHomeComponent
  ,    children:[
       {path:'', redirectTo: 'Dashboard', pathMatch: 'full' },
       {path: 'Dashboard', component:DashboardComponent}
   ]
}
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes),
    DashboardModule],
  exports: [RouterModule],
  declarations: []
})
export class adminHomeRoutingModule {
    
 }
