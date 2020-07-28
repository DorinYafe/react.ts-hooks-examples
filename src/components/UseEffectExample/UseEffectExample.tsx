import React from 'react';
import { useFetch, } from '../../utils/useFetch';
import { useMeasure, } from '../../utils/useMeasure';

export default function UseEffectExample() {

    const [count, setCount,]: any = React.useState(1);

    const { data, loading, }: any = useFetch(`http://numbersapi.com/${count}/trivia`);
    const [rect, paraRef,] = useMeasure({});

    React.useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);

    React.useEffect(() => {
        localStorage.getItem('count');
    }, [setCount]);

    return (
        <div>
            <h1>Use Effect Example:</h1>
            <h2>Custom useFetch hook:</h2>
            <div style={{ display: 'flex' }}>
                <p ref={paraRef}>{!data ? 'Loading...' : data}</p>
            </div>
            <h5>The measures of the para above showing the data:</h5>
            <pre>{JSON.stringify(rect, null, 2)}</pre>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c: any) => c + 1)}>increment</button>
        </div>
    )
}
