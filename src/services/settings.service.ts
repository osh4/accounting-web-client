import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, Observable, throwError} from "rxjs";
import {Setting} from "../models/Setting";
import {SettingType} from "../models/SettingType";
import {NetworkService} from "./network.service";
import {SettingApiResponse} from "../models/api/SettingApiResponse";

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

    this.fetchSettingTypes()
      .subscribe((data: Array<SettingType>) => this.settingTypes.push(...data));
  }

  private fetchSettingTypes() {
    return this.http.get<Array<SettingType>>(this.settingTypesUrl);
  }

  public fetchSettings(page: number = this.DEFAULT_PAGE,
                       size: number = this.DEFAULT_SIZE,
                       sort: string = this.DEFAULT_SORT): Observable<SettingApiResponse> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("page", page);
    queryParams = queryParams.append("size", size);
    queryParams = queryParams.append("sort", sort);
    return this.http.get<SettingApiResponse>(this.settingsUrl, {params: queryParams});
  }

  public fetchSetting(key: string): Observable<Setting> {
    return this.http.get<Setting>(this.settingsUrl + "/" + key).pipe(
      catchError(this.handleError)
    );
  }

  public getDefaultPageSize(): Observable<Setting> {
    return this.fetchSetting('default.page.size');
  }

  public getDefaultSettingType(): Observable<Setting> {
    return this.fetchSetting('default.setting.type');
  }

  public getSettingTypes(): Array<SettingType> {
    return this.settingTypes;
  }

  public fetchSettingType(id: String): Observable<SettingType> {
    return this.http.get<SettingType>(this.settingTypesUrl + "/" + id).pipe(
      catchError(this.handleError)
    );
  }

  public createSetting(setting: Setting) {
    return this.http.post(this.settingsUrl, setting);
  }

  public remove(id: String) {
    return this.http.delete(this.settingsUrl + "/" + id, {headers: this.headers});
  }

  update(setting: Setting) {
    this.http.put(this.settingsUrl + "/" + setting.key, setting).subscribe(data => console.log(data));
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
