import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './views/about/about.component';
import { TunesComponent } from './views/tunes/tunes.component';
import { HomeComponent } from './views/home/home.component';

//components
import { TheNavigationComponent } from './components/the-navigation/the-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TunesComponent,
    HomeComponent,
    TheNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
