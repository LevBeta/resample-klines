//OHLCV JSON
//timestamps should be in miliseconds
export type JOHLCV = {
    time: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}

//OHLCV ARRAY
export type AOHLCV = [number, number, number, number, number, number]


//Base and target timeframe should be seconds (60 -> 1m / 300 -> 5m)
export const changeTimeframe = (
    candles: JOHLCV[],
    base: number,
    target: number
): JOHLCV[] => {

    if (!Array.isArray(candles)) {
        throw new TypeError("The 'candles' parameter must be an array.");
    }

    if (candles.length == 0){
        throw new RangeError("The 'candles' array must have at least 2 elements.");
    }

    if (typeof base !== 'number' || isNaN(base)) {
        throw new TypeError("The 'base' parameter must be a number.");
    }
    
    if (typeof target !== 'number' || isNaN(target)) {
        throw new TypeError("The 'target' parameter must be a number.");
    }

    let t_quantity = target / base;

    if (t_quantity % 1 !== 0) {
        throw new Error("Base should be divisable by target");
    }

    let output: JOHLCV[] = []

    for (let i = 0; i < candles.length; i += t_quantity) {
        let sliceEnd = Math.min(i + t_quantity, candles.length);
      
        let high = Math.max(...candles.slice(i, sliceEnd).map(candle => candle.high));
        let low = Math.min(...candles.slice(i, sliceEnd).map(candle => candle.low));
        let open = candles[i].open;
        let close = candles[sliceEnd - 1].close;
        let volume = candles.slice(i, sliceEnd).reduce((sum, candle) => sum + candle.volume, 0);
      
        output.push({
          time: candles[i].time,
          open: open,
          high: high,
          low: low,
          close: close,
          volume: volume
        });
      }
    return output
}