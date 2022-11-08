import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Point } from "../types";

export default function Chart({ points } : { points: Point[] }) {
    return (
        <>
            <LineChart width={600} height={300} data={points}>
                <Line 
                    type="basis" 
                    dataKey="actual" 
                    stroke="black" 
                    dot={false} 
                    strokeWidth={2}
                />
                <XAxis 
                    dataKey="ds" 
                    tickFormatter={(tickItem: Date) => {
                        if(tickItem.getMonth() == 1 && tickItem.getDate() < 7) return tickItem.getUTCFullYear().toString()
                        return ""
                    }}
                    tickSize={0} 
                    tickMargin={5}
                    interval={0}
                />
                <YAxis tickFormatter={(val) => `$${val}`}/>
                <Tooltip labelFormatter={date => date.toDateString()} formatter={value => `$${Number(value).toFixed(2)}`}/>
                <Legend verticalAlign="top" height={36}/>
            </LineChart>
            <LineChart width={600} height={300} data={points.filter(val => val.actual == null)}>
                <Line 
                    type="basis" 
                    dataKey="predicted" 
                    stroke="red" 
                    dot={false} 
                    strokeWidth={2}
                />
                <XAxis 
                    dataKey="ds" 
                    tickFormatter={(tickItem: Date) => {
                        return tickItem.toLocaleDateString()
                    }}
                    tickSize={5} 
                    tickMargin={5}
                />
                <YAxis tickFormatter={(val) => `$${val}`}/>
                <Tooltip labelFormatter={date => date.toDateString()} formatter={value => `$${Number(value).toFixed(2)}`}/>
                <Legend verticalAlign="top" height={36}/>
            </LineChart>
            <LineChart width={600} height={300} data={points}>
                <Line 
                    type="basis" 
                    dataKey="predicted" 
                    stroke="#8884d8" 
                    dot={false} 
                    strokeWidth={3}
                />
                <Line 
                    type="basis" 
                    dataKey="actual" 
                    stroke="#7fe04f" 
                    dot={false} 
                    strokeWidth={2}
                />
                <XAxis 
                    dataKey="ds" 
                    tickFormatter={(tickItem: Date) => {
                        if(tickItem.getMonth() == 1 && tickItem.getDate() < 7) return tickItem.getUTCFullYear().toString()
                        return ""
                    }}
                    tickSize={0} 
                    tickMargin={5}
                    interval={0}
                />
                <YAxis tickFormatter={(val) => `$${val}`}/>
                <Tooltip labelFormatter={date => date.toDateString()} formatter={value => `$${Number(value).toFixed(2)}`}/>
                <Legend verticalAlign="top" height={36}/>
            </LineChart>
        </>
    )
}