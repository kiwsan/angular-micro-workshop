import { Component, OnInit } from "@angular/core";
import { Movie, Tv } from "../discover.models";
import { Page } from "../../../../../shared/src/lib/pagination/pagination-page";
import { DiscoverService } from "../discover.service";

@Component({
  selector: "discover-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {
  public movie: Page<Movie> = null;
  public tv: Page<Tv> = null;

  constructor(private apiClient: DiscoverService) {}

  ngOnInit() {

  }

  public getMovies() {
    this.apiClient.getMovies().subscribe(movie => {
      this.movie = movie;

      console.log(this.movie);
    });
  }

  public getTvs() {
    this.apiClient.getTvs().subscribe(tv => {
      this.tv = tv;

      console.log(this.tv);
    });
  }
}
