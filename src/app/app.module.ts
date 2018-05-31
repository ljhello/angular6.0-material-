import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from './core/core.module'
import { MatSidenavModule } from '@angular/material'
import { LoginingModule } from './login/login.module'

import { SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './app-routing.module';
import { ProjectComponent } from './project/project.component'
import { AdminModule } from './admin/admin.module';
import { EditortModule } from './editor/editor.module';
import { UploadModule } from './upload/upload.module';
import { LoadingComponent } from './loading/loading.component';
import { MapComponent } from './map/map.component'
@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    LoadingComponent,
    MapComponent,
  ],
  imports: [
    AdminModule,
    BrowserModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    CoreModule,
    LoginingModule,
    SharedModule,
    MatSidenavModule,
    AppRoutingModule,
    EditortModule,
    UploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
