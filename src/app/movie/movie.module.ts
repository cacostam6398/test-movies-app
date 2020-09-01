import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';
import { MoviesComponent } from './components/movies/movies.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgbRatingModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MoviesComponent, MovieDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    MovieRoutingModule,
    MatPaginatorModule,
    MatDividerModule,
    MatExpansionModule,
    NgbRatingModule,
    MatButtonModule,
    NgbAlertModule    
  ],
  exports:[
    MoviesComponent        
  ]
})

export class MovieModule { }
