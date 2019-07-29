import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyMusicComponent } from './my-music.component';

const routes: Routes = [
  { path: "", component: MyMusicComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyMusicRoutingModule { }
