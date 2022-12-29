import {TransactionType} from "./TransactionType";
import {Account} from "./Account";

export class Transaction {
  id: string = '';
  date: string = '';
  amount: number = 0;
  description: number = 0;
  type: TransactionType = new TransactionType();
  source: Account = new Account();
  target: Account = new Account();
}
