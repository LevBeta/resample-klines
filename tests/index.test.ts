import { JOHLCV, changeTimeframe } from '../src/index';

const data: Array<JOHLCV> = [
    {
        time: 1648978800000, // Unix timestamp for April 2, 2022, 12:00:00 AM UTC in milliseconds
        open: 1.2345,
        high: 1.3456,
        low: 1.1234,
        close: 1.2345,
        volume: 1000
    },
    {
        time: 1648978860000, // Unix timestamp for April 2, 2022, 12:01:00 AM UTC in milliseconds
        open: 1.2345,
        high: 1.3456,
        low: 1.1234,
        close: 1.2345,
        volume: 2000
    },
    {
        time: 1648978920000, // Unix timestamp for April 2, 2022, 12:02:00 AM UTC in milliseconds
        open: 1.2345,
        high: 1.3456,
        low: 1.1234,
        close: 1.2345,
        volume: 3000
    },
    {
        time: 1648978980000, // Unix timestamp for April 2, 2022, 12:03:00 AM UTC in milliseconds
        open: 1.2345,
        high: 1.3456,
        low: 1.1234,
        close: 1.2345,
        volume: 4000
    },
    {
        time: 1648979040000, // Unix timestamp for April 2, 2022, 12:04:00 AM UTC in milliseconds
        open: 1.2345,
        high: 1.3456,
        low: 1.1234,
        close: 1.2345,
        volume: 5000
    }
];
  
const result: Array<JOHLCV> = [
    {
        time: 1648978800000,
        open: 1.2345,
        high: 1.3456,
        low: 1.1234,
        close: 1.2345,
        volume: 3000,
    },
    {
        time: 1648978920000,
        open: 1.2345,
        high: 1.3456,
        low: 1.1234,
        close: 1.2345,
        volume: 7000
    },
    {
        time: 1648979040000,
        open: 1.2345,
        high: 1.3456,
        low: 1.1234,
        close: 1.2345,
        volume: 5000
    }
]

test("resample candles", () => {
    let t = changeTimeframe(data, 60, 120)
    expect(t).toEqual(result)
});