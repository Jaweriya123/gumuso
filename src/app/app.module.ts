import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidemenuComponent } from './header/sidemenu/sidemenu.component';
// import { ProductpageComponent } from './productpage/productpage.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
    // ProductpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
