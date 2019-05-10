import {Injectable} from '@angular/core';
import {ApiService, HttpResponseHandler} from '../../../../shared/src/lib/async-services/http';
import {HttpClient} from '@angular/common/http';
import {UtilityConstants} from '../../../../shared/src/lib/utilitys/utilityConstants';
import {catchError} from 'rxjs/operators';

@Injectable()
export class TrendingApiClientService extends ApiService {
  constructor(httpClient: HttpClient, responseHandler: HttpResponseHandler) {
    super('/api/3/trending', httpClient, responseHandler);
  }

  public getTrendings() {
    return this.httpClient
      .get(`${this.url}/all/day`, {
        params: {
          api_key: UtilityConstants.ApiKey,
        }
      })
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }
}
