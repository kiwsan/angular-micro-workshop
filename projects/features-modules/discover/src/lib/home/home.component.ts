import {Component, OnInit} from '@angular/core';
import {DiscoverApiClientService} from '../discover-api-client.service';
import {Movie, Tv} from '../discover.models';
import {Page} from '../../../../../shared/src/lib/pagination/pagination-page';

@Component({
  selector: 'discover-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public movie: Page<Movie> = null;
  public tv: Page<Tv> = null;

  constructor(private discoverApiClient: DiscoverApiClientService) {
  }

  ngOnInit() {
    this.getMovies();
  }

  public getMovies() {
    this.discoverApiClient.getMovies().subscribe(movie => {
      this.movie = movie;

      console.log(this.movie);
    });
  }

  public getTvs() {
    this.discoverApiClient.getTvs().subscribe(tv => {
      this.tv = tv;

      console.log(this.tv);
    });
  }
}
