import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiddleRoutingModule } from './middle-routing.module';

@NgModule({
  declarations: [
  ],
  // 对于一个模块中的组件，如果其他的模块想要使用，那么必须要将这个组件暴露出去
  exports: [
  ],
  imports: [
    CommonModule,
    MiddleRoutingModule
  ]
})
export class MiddleModule { }
