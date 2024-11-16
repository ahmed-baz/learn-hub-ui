export class PageResponse<T> {
  number?: number;
  list?: T[];
  size?: number;
  totalElements?: number;
  totalPages?: number;
  isLast?: boolean;
}
