import {ApiService, HttpResponseHandler} from '../../../../../shared/src/lib/async-services/http';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvsTopRatedService extends ApiService {
  constructor(httpClient: HttpClient, responseHandler: HttpResponseHandler) {
    super('/api/3/tv/', httpClient, responseHandler);
  }

  public getTopRates() {
    return this.httpClient
      .get(this.url + '/top_rated', {
        params: {
          language: 'en-US',
          page: '1'
        }
      })
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }
}
