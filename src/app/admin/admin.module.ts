// node modules
import { NgModule } from '@angular/core';

// shared module
import { SharedModule } from '../shared/shared.module';

// routing module
import { AdminRoutingModule } from './admin-routing.module';

// admin components
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
