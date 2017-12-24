import React, { Component } from 'react';
import styled from 'styled-components';
import { TopBar, SendContent } from '../components';

class Transfer extends Component{
    constructor(props){
        super(props);
        this.state = {
            top: '100px',
            opacity: '0',
        };
        this.timeoutId = null;
    }

    componentDidMount(){
        this.timeoutId = setTimeout(()=>{
            this.setState({
                top: '0',
                opacity: '1',
            });
        }, 0);
    }

    componentWillUnmount(){
        clearTimeout(this.timeoutId);
    }

    render(){
        const { top, opacity } = this.state;
        return(
            <TossTransfer top={top} opacity={opacity}>
                <TopBar />
                <SendContent />
            </TossTransfer>
        );
    }
}

export default Transfer;

const TossTransfer = styled.div`
    position: relative;
    margin-right: auto;
    margin-left: auto;
    margin-top: ${props => props.top ? props.top : '100px'};
    width: 100%;
    opacity: ${props => props.opacity? props.opacity : '0'};
    transition: margin 0.4s ease-in-out, opacity 0.4s ease-in-out;
`;