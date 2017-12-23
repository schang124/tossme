import React from 'react';
import styled from 'styled-components';

function ButtonSend({ accountMsg }){
    return (
        <ButtonContainer>
            <ButtonWrapper>
                <Message dangerouslySetInnerHTML={{ __html: accountMsg }}></Message>
                <ButtonToss>보내기</ButtonToss>
            </ButtonWrapper>
        </ButtonContainer>
    );
}

export default ButtonSend

// ButtonSend
const messageHeight = '25px';
const buttonSendHeight = '50px';

const ButtonContainer = styled.div`
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
`;

const ButtonWrapper = styled.div`
    margin: auto;
    padding: 10px 11px;
    max-width: 520px;
    text-align: center;
    box-sizing: border-box;
`;

const Message = styled.span.attrs({
    className: 'w300'
})`
    display: inline-block;
    margin-bottom: 13px;
    padding: 0 10px;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.9);
    line-height: ${messageHeight};
    background: #334a91;
    border-radius: 100px;
`;

const ButtonToss = styled.button`
    width: 100%;
    height: ${buttonSendHeight};
    font-size: 16px;
    color: ${props => props.send ? '#376ad2' : '#CCC'};
    background-color: ${props => props.send ? 'white' : '#e0e0e0'};
`;