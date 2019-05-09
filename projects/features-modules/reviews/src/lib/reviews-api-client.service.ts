import {Injectable} from '@angular/core';
import {ApiService, HttpResponseHandler} from '../../../../shared/src/lib/async-services/http';
import {HttpClient} from '@angular/common/http';
import {UtilityConstants} from '../../../../shared/src/lib/utilitys/utilityConstants';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ReviewsApiClientService extends ApiService {
  constructor(httpClient: HttpClient, responseHandler: HttpResponseHandler) {
    super('/api/3/review', httpClient, responseHandler);
  }

  public getDetail(id: string) {
    return this.httpClient
      .get(`${this.url}/${id}`, {
        params: {
          api_key: UtilityConstants.ApiKey,
        }
      })
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }
}
