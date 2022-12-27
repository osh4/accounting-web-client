import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private baseUrl = environment.baseUrl;
  private settingsUrl: string = environment.settings;
  private settingTypesUrl = environment.settingTypes;

  constructor() {

  }

  public getSettingsUrl(): string {
    return this.baseUrl + this.settingsUrl;
  }

  public getSettingTypesUrl(): string {
    return this.baseUrl + this.settingTypesUrl;
  }

}
