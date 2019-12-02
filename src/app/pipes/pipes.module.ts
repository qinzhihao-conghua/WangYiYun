import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountsFormatePipe } from './counts-formate.pipe';

@NgModule({
  declarations: [
    CountsFormatePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CountsFormatePipe
  ]
})
export class PipesModule { }
