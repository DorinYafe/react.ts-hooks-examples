import React from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';
import Home from './Home';
import About from './About';
import { UserContext, } from '../../Context/UserContext';

const UseContextExample: React.FC = () => {

    const { Provider, }: any = UserContext;
    const [user, setUser,] = React.useState();
    const valueProvider = React.useMemo(() => ({ user, setUser, }), [user, setUser,]);

    return (
        <Router>
            <div>
                <h1>Use Context Example:</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to='/home'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                </nav>
                <Provider value={valueProvider}>
                    <Route path='/home' exact component={Home} />
                    <Route path='/about' component={About} />
                </Provider>
            </div>
        </Router>
    )
}

export default UseContextExample;