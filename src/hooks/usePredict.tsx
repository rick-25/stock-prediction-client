import useSWR from "swr"
import api from "../axios";
import { Point } from "../types";

export default function usePredict(symbol: string) {
    let { data, error } = useSWR<Point[]>(symbol, async () => {
        const data = await api.get('/predict', {
            params: { symbol, periods: 30 }
        });

        return JSON.parse(data.data).map((el: Point) => {
            el.ds = new Date(el.ds)
            return el
        }) 
    });

    console.log(data);
    
    return {
        prediction: data,
        error
    }
}