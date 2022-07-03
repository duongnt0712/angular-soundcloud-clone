import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainPageRoutingModule } from './main-page-routing.module';
import { TabViewModule } from 'primeng/tabview';

import {MenubarModule} from 'primeng/menubar';
import { MainPageComponent } from './main-page.component';

const pModules = [
  MenubarModule
]

@NgModule({
  declarations: [MainPageComponent],
  imports:[
    ...pModules,
    CommonModule,
    TabViewModule,
    MainPageRoutingModule,
  ],
})
export class MainPageModule {}
