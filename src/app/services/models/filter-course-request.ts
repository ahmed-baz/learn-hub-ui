export class FilterCourseRequest {

  constructor(index: number, size: number) {
    this.index = index;
    this.size = size;
  }

  index?: number;
  size?: number;
  keyword?: string;
  from?: Date;
  to?: Date;
  isLast?: boolean;
  sortBy?: string;
  sort?: string;
}
