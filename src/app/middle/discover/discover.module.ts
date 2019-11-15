import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoverRoutingModule } from './discover-routing.module';
import { DiscoverComponent } from './discover.component';
import { MiddleTopComponent } from './middle-top/middle-top.component';
import { MiddleContainComponent } from './middle-contain/middle-contain.component';
import { PlaylistItemComponent } from './common/playlist-item/playlist-item.component';

@NgModule({
  declarations: [
    DiscoverComponent,
    MiddleTopComponent,
    MiddleContainComponent,
    PlaylistItemComponent
  ],
  imports: [
    CommonModule,
    DiscoverRoutingModule
  ]
})
export class DiscoverModule { }
