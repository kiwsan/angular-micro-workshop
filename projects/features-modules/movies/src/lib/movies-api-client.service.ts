import { Injectable } from "@angular/core";
import {
  ApiService,
  HttpResponseHandler
} from "../../../../shared/src/lib/async-services/http";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable()
export class MoviesApiClientService extends ApiService {
  constructor(httpClient: HttpClient, responseHandler: HttpResponseHandler) {
    super("/api/3/movie", httpClient, responseHandler);
  }

  public getDetail(id: number) {
    return this.httpClient
      .get(`${this.url}/${id}`, {
        params: {
          language: "en-US"
        }
      })
      .pipe(
        catchError((err, source) => this.responseHandler.onCatch(err, source))
      );
  }

  public getAlternativeTitles(id: number) {
    return this.httpClient
      .get(`${this.url}/${id}/alternative_titles`, {
        params: {
          country: ""
        }
      })
      .pipe(
        catchError((err, source) => this.responseHandler.onCatch(err, source))
      );
  }

  public getCredits(id: number) {
    return this.httpClient
      .get(`${this.url}/${id}/credits`, {})
      .pipe(
        catchError((err, source) => this.responseHandler.onCatch(err, source))
      );
  }

  public getExternalIDs(id: number) {
    return this.httpClient
      .get(`${this.url}/${id}/external_ids`, {})
      .pipe(
        catchError((err, source) => this.responseHandler.onCatch(err, source))
      );
  }

  public getReleaseDates(id: number) {
    return this.httpClient
      .get(`${this.url}/${id}/release_dates`, {})
      .pipe(
        catchError((err, source) => this.responseHandler.onCatch(err, source))
      );
  }

  public getVideos(id: number) {
    return this.httpClient
      .get(`${this.url}/${id}/videos`, {
        params: {
          language: "en-US"
        }
      })
      .pipe(
        catchError((err, source) => this.responseHandler.onCatch(err, source))
      );
  }

  public getRecommendations(id: number) {
    return this.httpClient
      .get(`${this.url}/${id}/recommendations`, {
        params: {
          language: "en-US",
          page: "1"
        }
      })
      .pipe(
        catchError((err, source) => this.responseHandler.onCatch(err, source))
      );
  }

  public getNowPlayings() {
    return this.httpClient
      .get(`${this.url}/now_playing`, {
        params: {
          language: "en-US",
          page: "1"
        }
      })
      .pipe(
        catchError((err, source) => this.responseHandler.onCatch(err, source))
      );
  }

  public getPopulars() {
    return this.httpClient
      .get(`${this.url}/popular`, {
        params: {
          language: "en-US",
          page: "1"
        }
      })
      .pipe(
        catchError((err, source) => this.responseHandler.onCatch(err, source))
      );
  }

  public getTopRateds() {
    return this.httpClient
      .get(`${this.url}/top_rated`, {
        params: {
          language: "en-US",
          page: "1"
        }
      })
      .pipe(
        catchError((err, source) => this.responseHandler.onCatch(err, source))
      );
  }

  public getUpcomings() {
    return this.httpClient
      .get(`${this.url}/upcoming`, {
        params: {
          language: "en-US",
          page: "1"
        }
      })
      .pipe(
        catchError((err, source) => this.responseHandler.onCatch(err, source))
      );
  }
}
