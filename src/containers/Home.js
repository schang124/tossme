import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../media/toss_logo_white.png';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            key: 'value',
        }
    }

    render(){
        return(
            <TossHome>
                <Logo src={logo}/>
                <GoTransfer to="/transfer">송금할 금액 입력</GoTransfer>
            </TossHome>
        );
    }
}

export default Home;

const TossHome = styled.div`
    position: relative;
    padding: 0 15px;
    font-size: 0;
`;

const Logo = styled.img.attrs({
    src: props => props.src
})`
    display: block;
    margin: 50px auto 30px;
    width: 56px;
    height: 20px;
`;

const linkHeight = '48px';
const GoTransfer = styled(Link)`
    display: block;
    padding: 0 16px;
    height: ${linkHeight};
    line-height: ${linkHeight};
    background-color: white;
    font-size: 16px;
    color: rgba(0, 0, 50, 0.4);
    border-radius: 2px;
`;