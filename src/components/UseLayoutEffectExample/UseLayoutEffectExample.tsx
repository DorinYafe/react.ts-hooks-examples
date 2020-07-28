import React from 'react';
import { useFetch, } from '../../utils/useFetch';

export default function UseLayoutEffectExample() {

    const [name, setName,] = React.useState('');
    const [rect, setRect,] = React.useState('');
    const inputRef: any = React.useRef();
    const divRef: any = React.useRef();
    const { data, loading, }: any = useFetch(`http://numbersapi.com/43/trivia`);

    React.useEffect(() => {
        inputRef.current.focus();
    }, []);

    React.useLayoutEffect(() => {
        setRect(divRef.current.getBoundingClientRect());
    }, [data]);

    return (
        <div>
            <input
                type="text"
                placeholder="Name"
                ref={inputRef}
                onChange={e => setName(e.target.value)}
            />
            <p>{name}</p>
            <button style={{ marginBottom: '1rem' }} onClick={() => console.log(inputRef)}>Console log input fields</button>
            <div style={{ display: 'flex' }}>
                <div ref={divRef}>{!data ? 'Loading...' : data}</div>
            </div>
            <h4>The boundries of the div element showing the data:</h4>
            <pre>{JSON.stringify(rect, null, 2)}</pre>
        </div>
    )
}
