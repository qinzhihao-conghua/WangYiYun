import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiddleRoutingModule } from './middle-routing.module';
import { MiddleComponent } from './middle.component';
import { DiscoverComponent } from './discover/discover.component';
import { MiddleTopComponent } from './discover/middle-top/middle-top.component';
import { MiddleContainComponent } from './discover/middle-contain/middle-contain.component';
import { MyMusicComponent } from './my-music/my-music.component';
import { FriendComponent } from './friend/friend.component';
import { ShopComponent } from './shop/shop.component';
import { CreatorComponent } from './creator/creator.component';
import { DownloadComponent } from './download/download.component';

@NgModule({
  declarations: [
    MiddleComponent,
    MiddleTopComponent,
    MiddleContainComponent,
    DiscoverComponent,
    // MyMusicComponent,
    // FriendComponent,
    // ShopComponent,
    // CreatorComponent,
    // DownloadComponent
  ],
  // 对于一个模块中的组件，如果其他的模块想要使用，那么必须要将这个组件暴露出去
  exports: [
    MiddleComponent,
  ],
  imports: [
    CommonModule,
    MiddleRoutingModule
  ]
})
export class MiddleModule { }
