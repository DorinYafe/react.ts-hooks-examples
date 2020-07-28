import React from 'react';

type Hook = (deps: any) => any;

export const useMeasure: Hook = deps => {
    const [rect, setRect,] = React.useState({});
    const myRef: any = React.useRef();

    React.useLayoutEffect(() => {
        setRect(myRef.current.getBoundingClientRect())
    }, deps);

    return [rect, myRef];
};