import { NgModule,SkipSelf,Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SharedModule }  from '../shared/shared.module'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {CoreComponent } from './core.component'
import { ConfigService } from './config.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  declarations: [HeaderComponent, FooterComponent,CoreComponent],
  exports:[
    HeaderComponent,
    FooterComponent,
    CoreComponent
  ],
  providers:[
    ConfigService
  ],
  entryComponents:[

     ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule){
    if(parent){
      throw new Error("模块已经存在，不能再次加载");
    }
  }
}
