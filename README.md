# ng-amchart
Tested for angular5

## Installation
```
npm install ng-amchart
```

Add amcharts.js to index.html
```
<script src="https://www.amcharts.com/lib/3/amcharts.js"></script>
<script src="https://www.amcharts.com/lib/3/serial.js"></script>
<script src="https://www.amcharts.com/lib/3/themes/light.js"></script>
```
## How to use

### imports amchart module
``` app.module.ts
import { AmChartModule } from "ng-amchart";
@NgModule({
    imports: [ AmChartModule ]
})
```

### imports amchart service
``` app.module.ts

import { AmChartsService } from "ng-amchart";
export class myPage
private chart:any;
constructor( protected amchart:AmChartsService) {}

    ngAfterViewInit() {

     this.chart = this.amchart.makeChart("chartdiv", {
       "type": "serial",
       "theme": "light",
       "categoryField": "category",
       "graphs": [
   {
     "valueField": "value"
   }
 ],
       "dataProvider": [ {
             "category": "item1",
             "value": 8,

           },
           {
             "category": "item2",
             "value": 4,
           },
           {
             "category": "item3",
             "value": 15,
           },
           {
             "category": "item4",
             "value": 4,
           }]
     });
   }

```
