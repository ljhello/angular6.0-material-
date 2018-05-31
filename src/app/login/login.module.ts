import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { LoginingRoutingModule } from './login.routing.module';
@NgModule({
  imports: [
    SharedModule,
    LoginingRoutingModule
  ],
  declarations: [LoginComponent,RegisterComponent],
  exports:[
    LoginComponent,
    RegisterComponent
  ]
})
export class LoginingModule { }
