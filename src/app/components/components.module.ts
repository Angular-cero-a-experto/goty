import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from '../app-routing.module';

import { NavbarComponent } from './navbar/navbar.component';
import { BarraHorizontalComponent } from './barra-horizontal/barra-horizontal.component';



@NgModule({
  declarations: [
    NavbarComponent, 
    BarraHorizontalComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  exports: [
    NavbarComponent,
    BarraHorizontalComponent
  ]
})
export class ComponentsModule { }
