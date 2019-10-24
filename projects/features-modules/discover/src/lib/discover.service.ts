import { Injectable } from "@angular/core";
import {
  ApiService,
  HttpResponseHandler
} from "../../../../shared/src/lib/async-services/http";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DiscoverService extends ApiService {
  constructor(httpClient: HttpClient, responseHandler: HttpResponseHandler) {
    super("/api/3/discover", httpClient, responseHandler);
  }

  public getMovies() {
    return this.httpClient
      .get(this.url + "/movie", {
        params: {
          language: "en-US",
          sort_by: "popularity.desc",
          include_adult: "false",
          include_video: "false",
          page: "1"
        }
      })
      .pipe(
        catchError((err, source) => this.responseHandler.onCatch(err, source))
      );
  }

  public getTvs() {
    return this.httpClient
      .get(this.url + "tv", {
        params: {
          language: "en-US",
          sort_by: "popularity.desc",
          page: "1",
          timezone: "America%2FNew_York",
          include_null_first_air_dates: "false"
        }
      })
      .pipe(
        catchError((err, source) => this.responseHandler.onCatch(err, source))
      );
  }
}
