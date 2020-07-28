import React from "react";
import { Router, Route, Switch, } from 'react-router-dom';
import { createBrowserHistory, } from 'history';
import EffectAndRef from './components/EffectAndRef/EffectAndRef';
import Example from "./components/RenderProps/Example";
import Navigation from "./components/Navigation/Navigation";
import UseStateExample from "./components/UseStateExample/UseStateExample";
import UseEffectExample from "./components/UseEffectExample/UseEffectExample";
import UseLayoutEffectExample from "./components/UseLayoutEffectExample/UseLayoutEffectExample";
import UseCallbackExample from "./components/UseCallbackExample/UseCallbackExample";
import UseMemoExample from "./components/UseMemoExample/UseMemoExample";
import UseReducerExample from "./components/UseReducerExample/UseReducerExample";
import UseContextExample from './components/UseContextExample/UseContextExample';

const history = createBrowserHistory();

function App() {
  return (
    <>
      <Navigation history={history} />
      <Router history={history}>
        <Switch>
          <Route exact path="/effectandref" component={EffectAndRef} />
          <Route exact path="/" component={EffectAndRef} />
          <Route exact path="/example" component={Example} />
          <Route exact path="/state" component={UseStateExample} />
          <Route exact path="/effect" component={UseEffectExample} />
          <Route exact path="/layout" component={UseLayoutEffectExample} />
          <Route exact path="/callback" component={UseCallbackExample} />
          <Route exact path="/memo" component={UseMemoExample} />
          <Route exact path="/reducer" component={UseReducerExample} />
          <Route exact path="/context" component={UseContextExample} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
