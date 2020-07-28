import React from 'react';

type Hook = (url: string) => void;

export const useFetch: Hook = url => {
    const [state, setState,] = React.useState({ data: '', loading: true, });

    React.useEffect(() => {
        setState(state => ({ data: state.data, loading: true }));

        fetch(url)
            .then(x => x.text())
            .then(y => {
                setState({ data: y, loading: false })
            })
    }, [url, setState]);

    return state;
};