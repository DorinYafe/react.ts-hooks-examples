import React from 'react';

function GetInputValue({ render, }: any) {

    const [username, setUsername,] = React.useState('');

    function handleChange() {
       return (e: any) => setUsername(e.target.value)
    };

    return (
        <>
            {render(username, handleChange,)}
        </>
    );
};

export default GetInputValue;