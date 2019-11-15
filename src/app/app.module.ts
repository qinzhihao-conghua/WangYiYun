import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { HttpClientModule} from '@angular/common/http';
import { MiddleModule } from './middle/middle.module';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    BottomComponent
  ],
  // 引入其他模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MiddleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
