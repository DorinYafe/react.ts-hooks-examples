import React from 'react';

export const useCountRenders = () => {
    const renders = React.useRef(0);
    console.log(`renders: ${renders.current++}`)
};