import {Pageable} from "./Pageable";
import {Sort} from "./Sort";

export class ApiResponse<T> {
  content: Array<T> = [];
  pageable: Pageable = new Pageable();
  last: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;
  size: number = 0;
  number: number = 0;
  sort: Sort = new Sort();
  first: boolean = true;
  numberOfElements: number = 0;
  empty: boolean = true;
}
