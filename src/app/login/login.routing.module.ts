import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { ProjectComponent } from '../project/project.component'
import { AdminComponent } from '../admin/admin.component'
import { EditorComponent } from '../editor/editor.component'
import { UploadComponent } from '../upload/upload.component'
import { LoadingComponent } from '../loading/loading.component'
import { MapComponent } from '../map/map.component'
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'task', component: AdminComponent, children: [
      {
        path: 'list',
        component: ProjectComponent
      },{
        path: 'editor',
        component: EditorComponent
      },
      {
        path: 'upload',
        component: UploadComponent
      },
      {
        path: 'maps',
        component: MapComponent
      }
    ]
  },{
    path: 'loading', component: LoadingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginingRoutingModule { }
