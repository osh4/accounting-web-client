import {TransactionType} from "./TransactionType";
import {Account} from "./Account";

export class Transaction {
  id: string = '';
  transactionDate: string = '';
  amount: number = 0;
  description: number = 0;
  transactionType: TransactionType = new TransactionType();
  sourceAccount: Account = new Account();
  targetAccount: Account = new Account();
}
