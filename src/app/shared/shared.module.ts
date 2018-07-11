import { NgModule } from '@angular/core';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
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
