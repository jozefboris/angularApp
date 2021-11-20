import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//views
import { AboutComponent } from './views/about/about.component';
import { TunesComponent } from './views/tunes/tunes.component';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
{ path: 'about', component: AboutComponent },
{ path: 'tunes', component: TunesComponent },
{ path: '', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
