import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Movie, MovieDetailDTO, GuestSessionDTO, filterMoviesDTO } from '../models/movie';
import { GridCommon } from '../../utils/models/grid-common';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  //variable to Movie filter
  filter: filterMoviesDTO = {
    query: 'a',
    include_adult: false,
    page: 1,
    language: 'en-US'
  };

  //Movie search service
  getAllProducts() {
    return this.http.get<GridCommon<Movie>>(`${environment.searchMovie}?language=${this.filter.language}&page=${this.filter.page}&include_adult=${this.filter.include_adult}&query=${this.filter.query}&api_key=598e7d1f04a02ce8c72707412225eb25`);
  }

  //Get movie by ID
  getProduct(id: string) {
    return this.http.get<MovieDetailDTO>(`${environment.searchMovieById}/${id}?language=${this.filter.language}&api_key=598e7d1f04a02ce8c72707412225eb25`);
  }

  //Get GuestSession to be able to submit a rating
  getGuestSession() {
    return this.http.get<GuestSessionDTO>(`${environment.getGuestSession}?api_key=598e7d1f04a02ce8c72707412225eb25`);
  }

  //submit movie rating
  sendRating(score: number, guest_session: string) {
    return this.http.post(`${environment.rating}?api_key=598e7d1f04a02ce8c72707412225eb25&guest_session_id=${guest_session}`, { "value": score });
  }


}
