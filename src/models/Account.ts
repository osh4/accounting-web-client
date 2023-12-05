import {Currency} from "./Currency";
import {User} from "./User";

export class Account {
  id: string = '';
  name: string = '';
  description: string = '';
  currency: Currency = new Currency();
  user: User = new User();
}
