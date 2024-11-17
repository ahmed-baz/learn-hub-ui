import {User} from '../models/user';
import {CourseCoverImage} from './course-cover-image';

export class Course {
  id?: number;
  title?: string;
  description?: string;
  instructor?: User;
  numberOfHours?: number;
  courseImage?: CourseCoverImage;
  startAt?: string;
  createdAt?: string;
  createdBy?: number;
  lastModifiedAt?: string;
  lastModifiedBy?: number;
}
