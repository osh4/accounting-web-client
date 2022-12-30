import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {Setting} from "../models/Setting";
import {SettingType} from "../models/SettingType";
import {NetworkService} from "./network.service";
import {SettingApiResponse} from "../models/SettingApiResponse";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settingTypes: Array<SettingType> = [];
  settingsUrl: string = '';
  settingTypesUrl: string = '';
  private readonly DEFAULT_SIZE = 2;
  private readonly DEFAULT_PAGE = 0;
  private readonly DEFAULT_SORT = 'key_asc';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, public networkService: NetworkService) {
    this.settingsUrl = networkService.getSettingsUrl();
    this.settingTypesUrl = networkService.getSettingTypesUrl();

    this.http.get<Array<SettingType>>(this.settingTypesUrl)
      .subscribe((data: Array<SettingType>) => this.settingTypes.push(...data));
  }

  public getSettings(page: number = this.DEFAULT_PAGE,
                     size: number = this.DEFAULT_SIZE,
                     sort: string = this.DEFAULT_SORT): Observable<SettingApiResponse> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("page", page);
    queryParams = queryParams.append("size", size);
    queryParams = queryParams.append("sort", sort);
    return this.http.get<SettingApiResponse>(this.settingsUrl, {params: queryParams});
  }

  public getSettingTypes(): Array<SettingType> {
    return this.settingTypes;
  }

  public createSetting(setting: Setting) {
    return this.http.post(this.settingsUrl, setting);
  }

  public remove(setting: Setting) {
    const options = {
      headers: this.headers,
      body: setting
    };

    return this.http.delete(this.settingsUrl, options);
  }

  update(setting: Setting) {
    this.http.put(this.settingsUrl, setting).subscribe(data => console.log(data));
  }
}
