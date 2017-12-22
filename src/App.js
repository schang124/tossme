import React, { Component } from 'react';
import styled from 'styled-components';
import { Send } from './containers';

class App extends Component {

    render() {
        return (
            <Toss>
                <Send />
            </Toss>
        );
    }
}

export default App;

const Toss = styled.div`
    max-width: 520px;
    margin: auto;
`;
