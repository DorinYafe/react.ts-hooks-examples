import React from 'react';
import { UserContext, } from '../../Context/UserContext';

export default function About() {

    const { user, }: any = React.useContext(UserContext);

    return (
        <div>
            <h2>About</h2>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}
