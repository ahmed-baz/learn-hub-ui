import {Injectable} from '@angular/core';
import {Course} from '../models/course';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {FilterCourseRequest} from '../models/filter-course-request';
import {AppResponse} from '../models/app-response';
import {PageResponse} from '../models/page-response';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient) {
  }

  public create(course: Course) {
    return this.httpClient.post<AppResponse<Course>>(`${environment.courses_api_url}`, course);
  }

  public filter(request: FilterCourseRequest) {
    return this.httpClient.post<AppResponse<PageResponse<Course>>>(`${environment.courses_api_url}/filter`, request);
  }


  public update(id: number, course: Course) {
    return this.httpClient.put<AppResponse<Course>>(`${environment.courses_api_url}/${id}`, course);
  }

  public delete(id: number) {
    return this.httpClient.delete<AppResponse<void>>(`${environment.courses_api_url}/${id}`);
  }




}
