import {Sort} from "./Sort";

export class Pageable {
  sort: Sort = new Sort();
  offset: number = 0;
  pageNumber: number = 0;
  pageSize: number = 0;
  paged: boolean = false;
  unpaged: boolean = true;
}
