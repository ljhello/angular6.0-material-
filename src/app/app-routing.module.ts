import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './login/register/register.component'
import { AdminComponent } from './admin/admin.component';
import { CoreComponent } from './core/core.component'
const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch:'full' },
  {path:'station',component:CoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}


