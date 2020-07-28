import React from 'react';
import { useCountRenders, } from '../../utils/useCountRenders';
import Hello from './Hello';

interface Props {
    increment: any,
};

const Hello2 = React.memo<Props>(({ increment }) => {

    useCountRenders();

    return (
        <>
            <button onClick={() => increment(5)}>Hello2</button>
        </>
    )
});

export default Hello2;