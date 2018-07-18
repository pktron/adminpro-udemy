import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        SiderbarComponent,
        BreadcrumsComponent,
        NopagefoundComponent
    ],
    exports: [
        HeaderComponent,
        SiderbarComponent,
        BreadcrumsComponent,
        NopagefoundComponent
    ]
})

export class SharedModule { }
