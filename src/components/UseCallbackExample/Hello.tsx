import React from 'react';
import { useCountRenders, } from '../../utils/useCountRenders';

interface Props {
    increment: any,
};

const Hello = React.memo<Props>(({ increment }) => {

    useCountRenders();

    return (
        <>
            <button onClick={increment}>Hello</button>
        </>
    )
});

export default Hello;