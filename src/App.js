import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './utils/history';

import { Home, Transfer } from './containers';

import styled from 'styled-components';

class App extends Component {

    render() {
        return (
            <Router history={history}>
                <Toss>
                    <Route exact path="/" component={Home} />
                    <Route path="/transfer" component={Transfer} />
                </Toss>
            </Router>
        );
    }
}

export default App;

const Toss = styled.div`
    max-width: 520px;
    margin: auto;
`;
