import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreeComponent } from './tree.component';

const routes: Routes = [
    {
        path: '',
        component: TreeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class TreeRoutingModule { }
