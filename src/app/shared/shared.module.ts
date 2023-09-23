import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlagsLenguagesComponent } from './components/flags-lenguages/flags-lenguages.component';



@NgModule({
  declarations: [
    HeaderComponent, SidebarComponent, FooterComponent, FlagsLenguagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent, FlagsLenguagesComponent]
})
export class SharedModule { }
