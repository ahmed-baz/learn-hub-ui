import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CourseService} from '../../../../services/services/course.service';
import {PageResponse} from '../../../../services/models/page-response';
import {Course} from '../../../../services/models/course';
import {FilterCourseRequest} from '../../../../services/models/filter-course-request';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {

  index: number = 0;
  size: number = 10;
  keyword: string = 'all';
  response: PageResponse<Course> = new PageResponse<Course>;
  request: FilterCourseRequest = new FilterCourseRequest(this.index, this.size);
  errorsMessages: Array<string> = [];

  constructor(
    private router: Router,
    private courseService: CourseService
  ) {
  }

  ngOnInit(): void {
    this.courseList()
  }

  courseList() {
    this.errorsMessages = [];
    this.courseService
      .filter(this.request)
      .subscribe({
        next: (res) => {
          if (200 == res.statusCode) {
            this.response = res.data as PageResponse<Course>;
            console.log(this.response)
          } else {
            this.errorsMessages = this.getAllValidationErrors(res.validationErrors)
          }
        },
        error: (error) => {
          console.log(error)
          this.errorsMessages.push(error.error.message);
        }
      })
  }

  getAllValidationErrors(validationErrors: { [key: string]: string }): string[] {
    return Array.from(new Map(Object.entries(validationErrors)).values());
  }

}
