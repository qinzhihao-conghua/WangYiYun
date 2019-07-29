import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { HttpClientModule} from '@angular/common/http';
import { MiddleModule } from './middle/middle.module';
import { DiscoverModule } from './middle/discover/discover.module';
import { CreatorModule } from './middle/creator/creator.module';
import { DownloadModule } from './middle/download/download.module';
import { FriendModule } from './middle/friend/friend.module';
import { MyMusicModule } from './middle/my-music/my-music.module';
import { ShopModule } from './middle/shop/shop.module';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    BottomComponent,
  ],
  // 引入其他模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    MiddleModule,
    DiscoverModule,
    CreatorModule,
    DownloadModule,
    FriendModule,
    MyMusicModule,
    ShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
