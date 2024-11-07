/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import {HttpClient, HttpContext, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {StrictHttpResponse} from '../../strict-http-response';
import {RequestBuilder} from '../../request-builder';

import {Course} from '../../models/course';

export interface FindCourse$Params {
  id: number;
}

export function findCourse(http: HttpClient, rootUrl: string, params: FindCourse$Params, context?: HttpContext): Observable<StrictHttpResponse<Course>> {
  const rb = new RequestBuilder(rootUrl, findCourse.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({responseType: 'json', accept: 'application/json', context})
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Course>;
    })
  );
}

findCourse.PATH = '/api/v1/courses/{id}';
