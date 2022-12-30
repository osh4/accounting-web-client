import {Component, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {DashboardChartsData, IChartProps} from "./dashboard-charts-data";
import {DashboardService} from "../../services/dashboard.service";
import {TimePeriodEnum} from "../../enum/TimePeriodEnum";

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public periodText: string = '';
  public mainChart: IChartProps = {};
  public timePeriodRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });
  public periods = TimePeriodEnum;
  keys = Object.keys;

  constructor(private chartsData: DashboardChartsData, private dashboardService: DashboardService) {
    this.periods = dashboardService.getTimePeriodLabels();
  }

  ngOnInit(): void {
    this.initCharts();
  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
    this.periodText = 'Jan-Dec'
  }

  setPeriod(value: string): void {
    this.periodText = value;
    this.timePeriodRadioGroup.setValue({trafficRadio: value});
    this.chartsData.initMainChart(value);
    this.initCharts();
  }

}
