import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", loadChildren: () => import("./discover/discover.module").then(m => m.DiscoverModule) },
  { path: "my-music", loadChildren: () => import("./my-music/my-music.module").then(m => m.MyMusicModule) },
  { path: "friend", loadChildren: () => import("./friend/friend.module").then(m => m.FriendModule) },
  { path: "shop", loadChildren: () => import("./shop/shop.module").then(m => m.ShopModule) },
  { path: "creator", loadChildren: () => import("./creator/creator.module").then(m => m.CreatorModule) },
  { path: "download", loadChildren: () => import("./download/download.module").then(m => m.DownloadModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiddleRoutingModule { }
