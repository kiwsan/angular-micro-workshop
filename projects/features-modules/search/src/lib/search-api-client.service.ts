import {Injectable} from '@angular/core';
import {ApiService, HttpResponseHandler} from '../../../../shared/src/lib/async-services/http';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable()
export class SearchApiClientService extends ApiService {
  constructor(httpClient: HttpClient, responseHandler: HttpResponseHandler) {
    super('/api/3/search', httpClient, responseHandler);
  }

  public getCompanies(keyword: string) {
    return this.httpClient
      .get(`${this.url}/company`, {
        params: {
          query: keyword,
          page: '1'
        }
      })
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }

  public getCollections(keyword: string) {
    return this.httpClient
      .get(`${this.url}/collection`, {
        params: {
          language: 'en-US',
          query: keyword,
          page: '1'
        }
      })
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }

  public getKeywords(keyword: string) {
    return this.httpClient
      .get(`${this.url}/keyword`, {
        params: {
          query: keyword,
          page: '1'
        }
      })
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }

  public getMovies(keyword: string) {
    return this.httpClient
      .get(`${this.url}/movie`, {
        params: {
          language: 'en-US',
          query: keyword,
          page: '1',
          include_adult: 'false',
          region: 'en-US',
          year: '2019',
          primary_release_year: '2019'
        }
      })
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }

  public getMultis(keyword: string) {
    return this.httpClient
      .get(`${this.url}/multi`, {
        params: {
          language: 'en-US',
          query: keyword,
          page: '1',
          include_adult: 'false',
          region: 'en-US'
        }
      })
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }

  public getPersons(keyword: string) {
    return this.httpClient
      .get(`${this.url}/person`, {
        params: {
          language: 'en-US',
          query: keyword,
          page: '1',
          include_adult: 'false',
          region: 'en-US'
        }
      })
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }

  public getTvShows(keyword: string) {
    return this.httpClient
      .get(`${this.url}/tv`, {
        params: {
          language: 'en-US',
          query: keyword,
          page: '1',
          first_air_date_year: '2019'
        }
      })
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }
}
