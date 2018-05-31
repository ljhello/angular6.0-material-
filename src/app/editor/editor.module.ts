import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { EditorComponent } from './editor.component'
import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    QuillModule,
    ReactiveFormsModule
  ],

  declarations: [
    EditorComponent
  ],

})
export class EditortModule {}
