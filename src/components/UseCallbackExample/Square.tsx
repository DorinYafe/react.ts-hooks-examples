import React from 'react';
import { useCountRenders, } from '../../utils/useCountRenders';

interface Props {
    n: number,
    increment: any,
};

const Square = React.memo<Props>(({ n, increment }) => {

    useCountRenders();

    return (
        <>
            <button onClick={() => increment(n)}>{n}</button>
        </>
    )
});

export default Square;