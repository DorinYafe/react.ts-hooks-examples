import React from 'react';
import { UserContext, } from '../../Context/UserContext';
import { login, } from '../../utils/login';

export default function Home() {

    const { user, setUser, }: any = React.useContext(UserContext);

    return (
        <div>
            <h2>Home</h2>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            {
                user ?
                    <button onClick={() => setUser(null)}>Logout</button>
                    :
                    <button onClick={async () => {
                        const user = await login();
                        setUser(user);
                    }}>Login</button>
            }
        </div>
    )
}
