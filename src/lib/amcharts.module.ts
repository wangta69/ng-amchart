import { NgModule } from '@angular/core';

import { AmChartsService } from './amcharts.service';
import { AmChartsDirective } from './amcharts.directive';
import { ScriptService } from './script/script.service';

@NgModule({
  declarations: [
     AmChartsDirective
  ],
  imports: [

  ],
  exports: [
     AmChartsDirective,
  ],
  providers: [
    ScriptService, AmChartsDirective, AmChartsService
  ]
})
export class AmChartModule {}
