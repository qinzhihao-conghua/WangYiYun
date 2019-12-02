import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoverRoutingModule } from './discover-routing.module';
import { DiscoverComponent } from './discover.component';
import { BannerComponent } from './banner/banner.component';
import { SongListComponent } from './song-list/song-list.component';
import { PlaylistItemComponent } from './common/playlist-item/playlist-item.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NavgationBarComponent } from './common/navgation-bar/navgation-bar.component';
import { NewDiscComponent } from './common/new-disc/new-disc.component';

@NgModule({
  declarations: [
    DiscoverComponent,
    BannerComponent,
    SongListComponent,
    PlaylistItemComponent,
    NavgationBarComponent,
    NewDiscComponent
  ],
  imports: [
    CommonModule,
    DiscoverRoutingModule,
    PipesModule
  ]
})
export class DiscoverModule { }
