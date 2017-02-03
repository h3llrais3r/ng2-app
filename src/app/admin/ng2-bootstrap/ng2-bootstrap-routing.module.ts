import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ng2BootstrapComponent } from './ng2-bootstrap.component';
import { Ng2PopoverComponent } from './ng2-popover/ng2-popover.component';

const routes: Routes = [
    {
        path: '',
        component: Ng2BootstrapComponent
    },
    {
        path: 'ng2-popover',
        component: Ng2PopoverComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class Ng2BootstrapRoutingModule { }
