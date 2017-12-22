import React, { Component } from 'react';
import styled from 'styled-components';
import { TopBar, SendContent } from '../components';

class Send extends Component{
    constructor(props){
        super(props);
        this.state = {
            key: 'value',
        }
    }

    componentDidMount(){

    }
    
    render(){
        return(
            <TossSend>
                <TopBar />
                <SendContent />
            </TossSend>
        );
    }
}

export default Send;

const TossSend = styled.div`
    position: relative;
    margin: auto;
    width: 100%;
`;