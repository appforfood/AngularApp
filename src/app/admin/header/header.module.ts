import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { materialShareModule } from '../../../share/materialShare.module'

@NgModule({
    imports: [
        CommonModule,
        materialShareModule
    ],
    declarations: [
        HeaderComponent,
    ],
    providers: []
})
export class HeaderModule {


}
