import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimesPageComponent } from './pages/animes-page/animes-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { FormsModule } from '@angular/forms';
import {SliderModule} from 'primeng/slider';

@NgModule({
  declarations: [
    AppComponent,
    AnimesPageComponent,
    HomePageComponent,
    HeaderComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
