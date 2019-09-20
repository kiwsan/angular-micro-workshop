import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {HttpResponseHandler} from './http-response-handler.service';

@Injectable()
export class ApiService {
  constructor(
    protected url: string,
    protected httpClient: HttpClient,
    protected responseHandler: HttpResponseHandler
  ) {
  }

  public getOneById(id) {
    return this.httpClient.get(this.url + '/' + id, {});
  }

  public getAll() {
    return this.httpClient
      .get(this.url, {})
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }

  public create(post: any) {
    return this.httpClient
      .post(`${this.url}`, JSON.stringify(post), {})
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }

  public update(post: any) {
    return this.httpClient
      .patch(`${this.url}/${post.id}`, JSON.stringify(post), {})
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }

  public delete(id: any) {
    return this.httpClient
      .delete(`${this.url}/${id}`, {})
      .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  }
}
