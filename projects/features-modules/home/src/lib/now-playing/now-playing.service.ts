import {ApiService, HttpResponseHandler} from '../../../../../shared/src/lib/async-services/http';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NowPlayingService extends ApiService {
  constructor(httpClient: HttpClient, responseHandler: HttpResponseHandler) {
    super('/api/3/movie/', httpClient, responseHandler);
  }

  public getNowPlayings() {
    return this.httpClient
      .get(this.url + '/now_playing', {
        params: {
          language: 'en-US',
          page: '1'
        }
      })
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }
}
