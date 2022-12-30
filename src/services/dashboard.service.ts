import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {TimePeriodEnum} from "../enum/TimePeriodEnum";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() {

  }

  getTimePeriodLabels(): typeof TimePeriodEnum {
    let timePeriods = TimePeriodEnum;
    return timePeriods;
  }
}
