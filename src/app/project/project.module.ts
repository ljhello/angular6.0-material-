import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ProjectComponent } from './project.component'

import {MatPaginator, MatTableDataSource} from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    MatPaginator,
    MatTableDataSource
  ],

  declarations: [
    ProjectComponent
  ],

})
export class ProjectModule {}
