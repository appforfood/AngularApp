import { NgModule } from '@angular/core';
import { adminHomeComponent } from '../admin/home.component';
import { materialShareModule } from '../../share/materialShare.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { adminHomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    adminHomeComponent,
    HeaderComponent,
    SidebarComponent,  
  ],
  imports: [
    materialShareModule,
    adminHomeRoutingModule
  ],
  providers: [],
  bootstrap: [adminHomeComponent]
})
export class adminHomeModule { }
