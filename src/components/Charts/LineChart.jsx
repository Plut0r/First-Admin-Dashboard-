import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  LineSeries,
} from "@syncfusion/ej2-react-charts";

import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from "./data";
import { useStateContext } from "../../contexts/ContextProvider";

function LineChart() {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
          id="line-chart"
          height="420px"
          primaryXAxis={LinePrimaryXAxis}
          primaryYAxis={LinePrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "transparent"}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((series, index) => (
          <SeriesDirective key={index} {...series} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default LineChart;
