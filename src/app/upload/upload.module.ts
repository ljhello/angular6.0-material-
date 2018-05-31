import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { UploadComponent } from './upload.component'
import { DialogComponent } from './dialog/dialog.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],

  declarations: [
    UploadComponent,
    DialogComponent
  ],
  entryComponents:[
    DialogComponent
     ]
})
export class UploadModule {}
