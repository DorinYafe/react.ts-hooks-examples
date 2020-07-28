import React from 'react';
import { useFetch, } from '../../utils/useFetch';

function computLongestWord(arr: any) {
    if (!arr) {
        return [];
    };

    console.log('Computing longest word!');

    let longestWord = '';

    JSON.parse(arr).forEach((word: any) => {
        if (word.text.length > longestWord.length) {
            longestWord = word.text;
        }
    })
    return longestWord;
}
const UseMemoExample: React.FC = () => {

    const [count, setCount,] = React.useState(0);
    const { data, }: any = useFetch(`https://type.fit/api/quotes`);
    const longestWord = React.useMemo(() => computLongestWord(data), [data,])
    return (
        <div>
            <h1>Use Memo Example:</h1>
            <div>Count: {count}</div>
            <button onClick={() => setCount(count + 1)}>Count</button>
            <div>{JSON.stringify(longestWord)}</div>
        </div>
    )
}

export default UseMemoExample;