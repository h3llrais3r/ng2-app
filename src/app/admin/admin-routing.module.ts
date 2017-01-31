import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent
    },
    {
        path: 'datatable',
        loadChildren: 'app/admin/datatable/datatable.module#DatatableModule' // Lazy loading
    },
    {
        path: 'fileupload',
        loadChildren: 'app/admin/fileupload/fileupload.module#FileuploadModule' // Lazy loading
    },
    {
        path: 'tree',
        loadChildren: 'app/admin/tree/tree.module#TreeModule' // Lazy loading
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class AdminRoutingModule { }
