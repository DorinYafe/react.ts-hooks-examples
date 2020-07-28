import React from 'react'
import Toggle from './Toggle';
import GetInputValue from './GetInputValue';

export default function Example() {
    return (
        <div>
            <h1>Render Props Example:</h1>
            <GetInputValue render={(username: string, handleChange: any) => (
                <>
                    <input onChange={handleChange()} />
                    <p>{username}</p>
                </>
            )} />

            <Toggle render={(isToggleOn: boolean, toggleHandler: () => void) => (
                <>
                    <h1>{`${isToggleOn}`}</h1>
                    <button onClick={toggleHandler}>Toggle from render props</button>
                </>
            )} />

        </div>
    )
}
