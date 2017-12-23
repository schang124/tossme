import React from 'react';
import styled from 'styled-components'
import Icon from '../media/ic_close.png';

function TopBar(){
    return (
        <TossTopBar>
            <Button><IconClose src={Icon} /></Button>
            <Title>송금하기</Title>
        </TossTopBar>
    );
}

export default TopBar

const topbarHeight = '46px';
const TossTopBar = styled.section`
    position: relative;
    width: 100%;
    height: ${topbarHeight};
    line-height: 50px;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 16px; 
    color: white;
`;

const Button = styled.button`
    position: absolute;
    top: 0;
    left: 5px;
    margin: 0;
    padding: 0;
    width: ${topbarHeight};
    height: ${topbarHeight};
`;

export const IconClose = styled.img.attrs({
    src: props => props.src
})`
    display: block;
    margin: auto;
    width: 20px;
    height: 20px;
`;