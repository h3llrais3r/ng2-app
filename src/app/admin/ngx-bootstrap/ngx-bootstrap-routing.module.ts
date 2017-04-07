import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgxBootstrapComponent } from './ngx-bootstrap.component';
import { NgxPopoverComponent } from './ngx-popover/ngx-popover.component';

const routes: Routes = [
    {
        path: '',
        component: NgxBootstrapComponent
    },
    {
        path: 'ngx-popover',
        component: NgxPopoverComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class NgxBootstrapRoutingModule { }
