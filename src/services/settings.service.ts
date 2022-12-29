import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from "rxjs";
import {Setting} from "../types/Setting";
import {SettingType} from "../types/SettingType";
import {NetworkService} from "./network.service";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings: Array<Setting> = new Array<Setting>();
  private _settings: BehaviorSubject<Array<Setting>>;
  public readonly settings$;
  settingTypes: Array<SettingType> = [];
  settingsUrl: string = '';
  settingTypesUrl: string = '';

  constructor(public http: HttpClient, public networkService: NetworkService) {
    this.settingsUrl = networkService.getSettingsUrl();
    this.settingTypesUrl = networkService.getSettingTypesUrl();

    this.http.get<Array<SettingType>>(this.settingTypesUrl)
      .subscribe((data: Array<SettingType>) => this.settingTypes.push(...data));
    this.http.get<Array<Setting>>(this.settingsUrl)
      .subscribe((data: Array<Setting>) => this.settings.push(...data));
    this._settings = new BehaviorSubject(this.settings);
    this.settings$ = this._settings.asObservable();
  }

  public getSettingTypes(): Array<SettingType> {
    return this.settingTypes;
  }

  public getSettings(): Array<Setting> {
    return this._settings.getValue();
  }

  public setSettings(settings: Array<Setting>) {
    this._settings.next(settings);
  }

  public createSetting(setting: Setting) {
    const tempSettings = this._settings.getValue();
    this.http.post(this.settingsUrl, setting).subscribe(data => {
      console.log(data);
    });
    tempSettings.push(setting);
    this._settings.next(tempSettings);
  }

  public remove(setting: Setting) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: setting
    };

    this.http.delete(this.settingsUrl, options).subscribe(data => console.log(data));

    const dataWithoutOldSetting = this._settings.getValue().filter(el => el.key !== setting.key);
    this._settings.next(dataWithoutOldSetting);
  }

  update(setting: Setting) {
    this.http.put(this.settingsUrl, setting).subscribe(data => console.log(data));
  }
}
