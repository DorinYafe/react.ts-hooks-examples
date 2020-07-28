import React from 'react';
import { Router, Link, } from 'react-router-dom';

interface Props {
    history: any,
};

const Navigation: React.FC<Props> = ({ history, }) => {
    return (
        <>
            <Router history={history}>
                <Link to="/effectandref">
                    <button>Effect and Ref</button>
                </Link>
            </Router>
            <Router history={history}>
                <Link to="/example">
                    <button>Render Props Example</button>
                </Link>
            </Router>
            <Router history={history}>
                <Link to="/state">
                    <button>Use State Example</button>
                </Link>
            </Router>
            <Router history={history}>
                <Link to="/effect">
                    <button>Use Effect Example</button>
                </Link>
            </Router>
            <Router history={history}>
                <Link to="/layout">
                    <button>Use Layout Effect Example</button>
                </Link>
            </Router>
            <Router history={history}>
                <Link to="/callback">
                    <button>Use Callback Example</button>
                </Link>
            </Router>
            <Router history={history}>
                <Link to="/memo">
                    <button>Use Memo Example</button>
                </Link>
            </Router>
            <Router history={history}>
                <Link to="/reducer">
                    <button>Use Reducer Example</button>
                </Link>
            </Router>
            <Router history={history}>
                <Link to="/context">
                    <button>Use Context Example</button>
                </Link>
            </Router>
        </>
    )
}

export default Navigation;