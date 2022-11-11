import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Point } from "../types";

type LineType = {
    dataKey: string;
    stroke: string;
    width: number;
}
type PropType = {
    points: Point[];
    lines: LineType[];
    xInterval?: number;
    tickSize: number;
}

function StockChart({ points, lines, xInterval, tickSize }: PropType) {
  return (
    <LineChart width={600} height={300} data={points}>
        {lines.map((line, ind) => (
            <Line 
                key={ind}
                type="basis" 
                dataKey={line.dataKey}
                stroke={line.stroke}
                dot={false} 
                strokeWidth={line.width}
            />
        ))}
        <XAxis 
            dataKey="ds" 
            tickFormatter={(tickItem: Date) => {
                if(points.length > 31) {
                    if(tickItem.getMonth() == 1 && tickItem.getDate() < 7) return tickItem.getUTCFullYear().toString()
                    return ""
                } else {
                    return tickItem.toLocaleDateString()
                }
            }}
            tickSize={tickSize} 
            tickMargin={5}
            interval={xInterval}
        />
        <YAxis tickFormatter={(val) => `$${val}`}/>
        <Tooltip labelFormatter={date => date.toDateString()} formatter={value => `$${Number(value).toFixed(2)}`}/>
        <Legend verticalAlign="top" height={36}/>
    </LineChart>
  )
}

export default StockChart