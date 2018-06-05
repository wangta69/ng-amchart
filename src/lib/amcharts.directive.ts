import { Component, Directive, ElementRef, Input, SimpleChanges, NgZone, NgModule, Injectable } from '@angular/core';
import { copy, updateObject} from './functions';
import { AmChartsService } from './amcharts.service';
import { AmChart } from './interfaces';

// import * as amcharts3 from 'amcharts3';//아래 것으로 대처
// declare const AmCharts: any;

@Directive({
  selector: "amCharts"
})
export class AmChartsDirective {
  @Input() id: string;
  @Input() options: any; // TODO better type for this
  @Input() delay: number = 0;

  private chart: AmChart;

  constructor(private el: ElementRef,  private zone: NgZone, private amchartSvc: AmChartsService,) {}//private AmCharts: AmChartsService,

  ngAfterViewInit() {
    // AmCharts mutates the config object, so we have to make a deep copy to prevent that
    const props = copy(this.options);

    const el = this.el.nativeElement;

    el.id = this.id;
    el.style.display = "block";

    this.chart = this.amchartSvc.makeChart(this.id, props, this.delay);
  }

  // TODO is this correct ?
  ngOnChanges(x: SimpleChanges) {
    const el = this.el.nativeElement;

    if (x.id) {
      el.id = x.id.currentValue;
    }

    if (x.options) {
      // Update the chart after init
      if (this.chart) {
        // This is needed to avoid triggering ngDoCheck
        this.zone.runOutsideAngular(() => {
          var didUpdate = updateObject(this.chart, x.options.previousValue, x.options.currentValue);

          // TODO make this faster
          if (didUpdate) {
            this.chart.validateNow(true);
          }
        });
      }
    }
  }

  ngOnDestroy() {
    if (this.chart) {
      this.amchartSvc.destroyChart(this.chart);
    }
  }
}
