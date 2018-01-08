import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent
    },
    /*{
        path: 'fileupload',
        loadChildren: 'app/admin/fileupload/fileupload.module#FileuploadModule' // Lazy loading
    },*/
    {
        path: 'ngx-bootstrap',
        loadChildren: 'app/admin/ngx-bootstrap/ngx-bootstrap.module#NgxBootstrapModule' // Lazy loading
    },
    {
        path: 'primeng',
        loadChildren: 'app/admin/primeng/primeng.module#PrimengModule' // Lazy loading
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class AdminRoutingModule { }
