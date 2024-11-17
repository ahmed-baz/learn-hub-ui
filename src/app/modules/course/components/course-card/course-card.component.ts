import {Component, Input} from '@angular/core';
import {Course} from '../../../../services/models/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  private _course: Course = new Course();
  private _management: boolean = false;

  get course(): Course {
    return this._course;
  }

  @Input()
  set course(course: Course) {
    this._course = course;
  }

  get courseCover(): string | undefined {
    if (this._course.courseImage && this._course.courseImage.data) {
      return `data:${this._course.courseImage.type};base64,${this._course.courseImage.data}`;
    }
    return 'https://www.kasandbox.org/programming-images/avatars/duskpin-tree.png';
  }

  /*
  @Output() private share: EventEmitter<any> = new EventEmitter<any>();
  @Output() private showDetails: EventEmitter<any> = new EventEmitter<any>();
  @Output() private subscribe: EventEmitter<any> = new EventEmitter<any>();
  @Output() private unsubscribe: EventEmitter<any> = new EventEmitter<any>();
  @Output() private addToFavorites: EventEmitter<any> = new EventEmitter<any>();
  @Output() private edit: EventEmitter<any> = new EventEmitter<any>();
   */

  get management(): boolean {
    return this._management;
  }

  @Input()
  set management(value: boolean) {
    this._management = value;
  }

  onShowDetails() {
  }

  onSubscribe() {
  }

  onAddToFavorites() {
  }

  onEdit() {
  }

  onShare() {
  }

  onUnsubscribe() {
  }
}
