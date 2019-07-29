import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscoverComponent } from './middle/discover/discover.component';

const routes: Routes = [
  { path: "", redirectTo: "discover", pathMatch: "full" },
  { path: "discover", component: DiscoverComponent },
  { path: "my-music", loadChildren: () => import("./middle/my-music/my-music.module").then(m => m.MyMusicModule) },
  { path: "friend", loadChildren: () => import("./middle/friend/friend.module").then(m => m.FriendModule) },
  { path: "shop", loadChildren: () => import("./middle/shop/shop.module").then(m => m.ShopModule) },
  { path: "creator", loadChildren: () => import("./middle/creator/creator.module").then(m => m.CreatorModule) },
  { path: "download", loadChildren: () => import("./middle/download/download.module").then(m => m.DownloadModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
