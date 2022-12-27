import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private baseUrl = environment.baseUrl;

  constructor() {

  }

  public getSettingsUrl(): string {
    return this.baseUrl + environment.settings;
  }

  public getSettingTypesUrl(): string {
    return this.baseUrl + environment.settingTypes;
  }

  public getAccountsUrl(): string {
    return this.baseUrl + environment.accounts;
  }

  public getCurrencyUrl(): string {
    return this.baseUrl + environment.currency;
  }

  public getTransactionsUrl(): string {
    return this.baseUrl + environment.transactions;
  }

  public getTransactionTypesUrl(): string {
    return this.baseUrl + environment.transactionTypes;
  }


  // public getAccountTypesUrl(): string {
  //   return this.baseUrl + environment.accountTypes;
  // }

}
