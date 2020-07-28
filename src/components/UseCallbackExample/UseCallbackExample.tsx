import React from 'react';
import Hello from './Hello';
import Hello2 from './Hello2';
import Square from './Square';

export default function UseCallbackExample() {

    const [count, setCount,] = React.useState(0);
    const favoriteNums = [7, 21, 37];

    const increment: any = React.useCallback(() => {
        setCount(c => c + 1);
    }, [setCount]);

    const incrementPlusFive: any = React.useCallback((n: number) => {
        setCount(c => c + n)
    }, [setCount])

    return (
        <div style={{ margin: '1rem' }}>
            <Hello increment={increment} />
            <Hello2 increment={incrementPlusFive} />
            <div>Count: {count}</div>
            {
                favoriteNums.map(n => {
                    return <Square increment={incrementPlusFive} n={n} key={n} />
                })
            }
        </div>
    )
}
