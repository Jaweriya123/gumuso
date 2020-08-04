import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeContentComponent } from './home-content/home-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
