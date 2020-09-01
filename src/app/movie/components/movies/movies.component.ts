import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Subject, of as observableOf } from 'rxjs';
import { switchMap, map, catchError, debounceTime, tap } from 'rxjs/operators';
import { Movie } from '../../models/movie';
import { MoviesService } from './../../services/movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  //Children to paging functionality
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  _search$ = new Subject<void>();
  resultsLength = 0;
  movies: Movie[] = [];


  ngOnInit(): void {
    this.loadMovies();
  }

  //Load observable to the movie list 
  loadMovies() {
    
    this._search$.pipe(
      debounceTime(600),
      switchMap(() =>
        this.moviesService.getAllProducts()
      ),
      map(data => {
        this.resultsLength = data.total_results;
        return data.results;
      }),
      catchError(() => {
        this.movies = [];
        console.log("No data found");
        return observableOf([]);
      })
    ).subscribe(data => {
      this.movies = data;
    });
    
    this.moviesService.filter.query='a'
    this._search$.next();
  }

  // function to paging event 
  getServerData(event?: PageEvent) {
    this.moviesService.filter.page = event.pageIndex + 1;
    this._search$.next();
    return event;
  }

  // function to search Event
  applyFilter(filterValue: string) {
    if (filterValue != '') {
      this.moviesService.filter.query = filterValue;
      this._search$.next();
    }

  }


}
