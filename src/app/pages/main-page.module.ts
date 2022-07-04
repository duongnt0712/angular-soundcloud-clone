import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';

import { TabViewModule } from 'primeng/tabview';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';

const pModules = [
  MenubarModule,
  ButtonModule,
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
