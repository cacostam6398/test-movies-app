import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MovieModule} from './../movie/movie.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatPaginatorModule,
    MovieModule
  ]
})
export class HomeModule { }
