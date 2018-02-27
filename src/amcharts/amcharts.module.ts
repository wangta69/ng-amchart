import { NgModule } from '@angular/core';

import { AmChartsService } from "./amcharts.service";
import { AmChartsDirective } from "./amcharts.directive";


//export { AmChartsService } from "./amcharts.service";

@NgModule({
  declarations: [
    //AmChartsDirective
  ],
  imports: [

  ],
  exports: [
    //AmChartsDirective,
  ],
  providers: [
    AmChartsDirective, AmChartsService
  ]
})
export class AmChartModule {}
