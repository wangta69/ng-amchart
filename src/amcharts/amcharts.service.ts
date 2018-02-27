import { NgZone, Injectable } from '@angular/core';
import { AmChart, AmEvent } from "./interfaces";
//import * as amcharts3 from 'amcharts3';//아래 것으로 대처
// TODO better type for this
declare const AmCharts: any;

@Injectable()
export class AmChartsService {
  constructor(private zone: NgZone) {

      console.log("AmChartsService start");
      console.log(AmCharts);
     // console.log(this.amcharts3);
  }



  get baseHref(): boolean {
    return AmCharts.baseHref;
  }

  set baseHref(v: boolean) {
    AmCharts.baseHref = v;
  }


  get useUTC(): boolean {
    return AmCharts.useUTC;
  }

  set useUTC(v: boolean) {
    AmCharts.useUTC = v;
  }


  get dayNames(): Array<string> {
    return AmCharts.dayNames;
  }

  set dayNames(v: Array<string>) {
    AmCharts.dayNames = v;
  }


  get monthNames(): Array<string> {
    return AmCharts.monthNames;
  }

  set monthNames(v: Array<string>) {
    AmCharts.monthNames = v;
  }


  get shortDayNames(): Array<string> {
    return AmCharts.shortDayNames;
  }

  set shortDayNames(v: Array<string>) {
    AmCharts.shortDayNames = v;
  }


  get shortMonthNames(): Array<string> {
    return AmCharts.shortMonthNames;
  }

  set shortMonthNames(v: Array<string>) {
    AmCharts.shortMonthNames = v;
  }


  // TODO better type for this
  get theme(): any {
    return AmCharts.theme;
  }

  // TODO better type for this
  set theme(v: any) {
    AmCharts.theme = v;
  }


  get processDelay(): number {
    return AmCharts.processDelay;
  }

  set processDelay(v: number) {
    AmCharts.processDelay = v;
  }


  get charts(): Array<AmChart> {
    return AmCharts.charts;
  }


  // TODO is Node the correct type ?
  // TODO better type for config
  makeChart(id: string | Node, config: any, delay?: number): AmChart {
    return this.zone.runOutsideAngular(() => AmCharts.makeChart(id, config, delay));
  }


  addListener(chart: AmChart, type: string, fn: (event: AmEvent) => void): () => void {
    const callback = (e: AmEvent) => {
      this.zone.run(() => {
        fn(e);
      });
    };

    this.zone.runOutsideAngular(() => {
      chart.addListener(type, callback);
    });

    return () => {
      this.zone.runOutsideAngular(() => {
        chart.removeListener(chart, type, callback);
      });
    };
  }


  updateChart(chart: AmChart, fn: () => void): void {
    this.zone.runOutsideAngular(() => {
      fn();
      chart.validateNow(true);
    });
  }


  destroyChart(chart: AmChart): void {
    this.zone.runOutsideAngular(() => {
      chart.clear();
    });
  }

}
