import {Injectable} from '@angular/core';
import {ApiService, HttpResponseHandler} from '../../../../shared/src/lib/async-services/http';
import {HttpClient} from '@angular/common/http';
import {UtilityConstants} from '../../../../shared/src/lib/utilitys/utilityConstants';
import {catchError} from 'rxjs/operators';

@Injectable()
export class MoviesApiClientService extends ApiService {
  constructor(httpClient: HttpClient, responseHandler: HttpResponseHandler) {
    super('/api/3/movie', httpClient, responseHandler);
  }

  public getDetail(id: number) {
    return this.httpClient
      .get(`${this.url}/${id}`, {
        params: {
          api_key: UtilityConstants.ApiKey,
          language: 'en-US',
        }
      })
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }

  public getAlternativeTitles(id: number) {
    return this.httpClient
      .get(`${this.url}/${id}/alternative_titles`, {
        params: {
          api_key: UtilityConstants.ApiKey,
          country: '',
        }
      })
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }

  public getCredits(id: number) {
    return this.httpClient
      .get(`${this.url}/${id}/credits`, {
        params: {
          api_key: UtilityConstants.ApiKey,
        }
      })
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }

  public getExternalIDs(id: number) {
    return this.httpClient
      .get(`${this.url}/${id}/external_ids`, {
        params: {
          api_key: UtilityConstants.ApiKey,
        }
      })
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }

  public getReleaseDates(id: number) {
    return this.httpClient
      .get(`${this.url}/${id}/release_dates`, {
        params: {
          api_key: UtilityConstants.ApiKey,
        }
      })
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }

  public getVideos(id: number) {
    return this.httpClient
      .get(`${this.url}/${id}/videos`, {
        params: {
          api_key: UtilityConstants.ApiKey,
          language: 'en-US',
        }
      })
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }

  public getRecommendations(id: number) {
    return this.httpClient
      .get(`${this.url}/${id}/recommendations`, {
        params: {
          api_key: UtilityConstants.ApiKey,
          language: 'en-US',
          page: '1'
        }
      })
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }

  public getNowPlayings() {
    return this.httpClient
      .get(`${this.url}/now_playing`, {
        params: {
          api_key: UtilityConstants.ApiKey,
          language: 'en-US',
          page: '1'
        }
      })
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }

  public getPopulars() {
    return this.httpClient
      .get(`${this.url}/popular`, {
        params: {
          api_key: UtilityConstants.ApiKey,
          language: 'en-US',
          page: '1'
        }
      })
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }

  public getTopRateds() {
    return this.httpClient
      .get(`${this.url}/top_rated`, {
        params: {
          api_key: UtilityConstants.ApiKey,
          language: 'en-US',
          page: '1'
        }
      })
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }

  public getUpcomings() {
    return this.httpClient
      .get(`${this.url}/upcoming`, {
        params: {
          api_key: UtilityConstants.ApiKey,
          language: 'en-US',
          page: '1'
        }
      })
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }
}
