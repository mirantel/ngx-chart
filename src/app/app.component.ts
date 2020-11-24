import { Component } from '@angular/core';
import { lineChartSeries, areaChartSeries } from './combo-chart-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-non-strict';

  view: any[] = [800, 600];
  comboBarScheme = {
    name: 'singleLightBlue',
    selectable: true,
    group: 'Ordinal',
    domain: ['#01579b']
  };
  lineChartScheme = {
    name: 'coolthree',
    selectable: true,
    group: 'Ordinal',
    domain: ['#01579b', '#7aa3e5', '#a8385d', '#00bfa5']
  };
  areaChartScheme = {
    name: 'coolthree',
    selectable: true,
    group: 'Ordinal',
    domain: ['#0f0']
  };

  // Data
  lineChartSeries: any[] = lineChartSeries;
  areaChartSeries: any[] = areaChartSeries;

  // Props
  animations: boolean = false;
  tooltipDisabled: boolean = true;
  gradient: boolean = true;
  showXAxis: boolean = true;
  showYAxis: boolean = true;

  showLegend: boolean = false;
  legendTitle: string = 'Legend';
  legendPosition: string = 'right';

  showGridLines: boolean = true;

  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Delete';

  showYAxisLabel: boolean = false;
  yAxisLabel: string = 'Amount';
  yAxisLabelRight: string = 'Year';
  noBarWhenZero: boolean = true;

  /*
  **
  Combo Chart
  **
  [yLeftAxisScaleFactor]="yLeftAxisScale" and [yRightAxisScaleFactor]="yRightAxisScale"
  exposes the left and right min and max axis values for custom scaling, it is probably best to
  scale one axis in relation to the other axis but for flexibility to scale either the left or
  right axis bowth were exposed.
  **
  */

  yLeftAxisScale(min, max) {
    return { min: `${min}`, max: `${max}` };
  }

  yRightAxisScale(min, max) {
    return { min: `${min}`, max: `${max}` };
  }

  yLeftTickFormat(data) {
    return `${data.toLocaleString()}`;
  }

  yRightTickFormat(data) {
    return `${data}%`;
  }
}
