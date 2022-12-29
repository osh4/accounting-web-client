import {Component, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {DashboardChartsData, IChartProps} from "./dashboard-charts-data";

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public periodText: string = '';
  public mainChart: IChartProps = {};
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  constructor(private chartsData: DashboardChartsData) {
  }

  ngOnInit(): void {
    this.initCharts();
  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
    this.periodText = '2020-2021'
  }

  setTrafficPeriod(value: string): void {
    this.periodText = value;
    this.trafficRadioGroup.setValue({trafficRadio: value});
    this.chartsData.initMainChart(value);
    this.initCharts();
  }

}
