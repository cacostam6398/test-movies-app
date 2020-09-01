import { TestBed } from '@angular/core/testing';
import { MoviesService } from './movies.service';
import { HttpTestingController } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http'
import { RouterModule } from '@angular/router';

describe('MoviesService', () => {
  let service: MoviesService;
  let httpclient:HttpClient;
  let httpTestingController:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        httpTestingController,
        RouterModule.forRoot([])]
    });

    httpclient= TestBed.get(HttpClient)
    httpTestingController= TestBed.get(HttpTestingController)
    service = TestBed.get(MoviesService);
    // service = TestBed.inject(MoviesService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
