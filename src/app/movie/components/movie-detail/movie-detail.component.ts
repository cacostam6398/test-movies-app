import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MovieDetailDTO } from '../../models/movie';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private moviesService: MoviesService) { }

  // Observable to success messages
  private _success$ = new Subject<string>();


  movie: MovieDetailDTO;
  expandedList: boolean = true;
  staticAlertClosed: boolean = false;
  currentRate: number = 1;
  successMessage: string = '';


  ngOnInit(): void {
    this.loadMessages();
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  //Get a product by ID
  fetchProduct(id: string) {
    this.moviesService.getProduct(id)
      .subscribe(movie => {
        this.movie = movie;
      });
  }

  //Get a Guest Session
  async GuestSession() {
    await this.moviesService.getGuestSession().toPromise().then(result => {
      if (result.success) {
        this.sendRating(result.guest_session_id)
      }
    }, error => {
      console.log(error)
    });
  }

  //Send rating of my movie
  async sendRating(guest_session: string) {
    await this.moviesService.sendRating(this.currentRate, guest_session).toPromise().then(result => {
      this._success$.next(`Rating submitted.`);
    }, error => {
      console.log(error)
    });
  }

  //Load my observable to success messages
  loadMessages() {
    this._success$.subscribe(message => this.successMessage = message);
    this._success$.pipe(
      debounceTime(4000)
    ).subscribe(() => this.successMessage = '');
  }





}
