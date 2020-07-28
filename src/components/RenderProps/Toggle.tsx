import React from 'react'

function Toggle({ render, }: any) {

    const [isToggleOn, setToggleOn,] = React.useState(false);

    function toggleHandler() {
        setToggleOn(pre => !pre)
    }

    return (
        <>
            {render(isToggleOn, toggleHandler)}
        </>
    )
}


export default Toggle;