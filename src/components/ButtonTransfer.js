import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

function ButtonTransfer({ mine, tossAmount, accountIndex, send, history }){
    const account = mine.accounts[accountIndex];
    if(!account) return null;
    const valid = account.deposit.amount > 0 && tossAmount > 0;
    const msg = account.validate && account.deposit.amount > 0 ? account.validate.true : account.validate.false;

    function handleClick(){
        send();
        history.push('/');
    }

    return (
        <ButtonContainer>
            <ButtonWrapper>
                <Message dangerouslySetInnerHTML={{ __html: msg }}></Message>
                <ButtonToss valid={valid} onClick={handleClick} disabled={!valid}>보내기</ButtonToss>
            </ButtonWrapper>
        </ButtonContainer>
    );
}

export default withRouter(ButtonTransfer)

ButtonTransfer.propTypes = {
    mine: PropTypes.object,
    tossAmount: PropTypes.number,
    accountIndex: PropTypes.number,
    send: PropTypes.func,
};

// ButtonSend
const messageHeight = '26px';
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
    className: 'w250'
})`
    display: inline-block;
    margin-bottom: 13px;
    padding: 0 10px;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.9);
    line-height: ${messageHeight};
    background: #334a91;
    border-radius: 100px;
    transition: all 0.5s ease-in-out;
    
    b{
        font-weight: 400;
        color: #5fcbd7;
    }
`;

const ButtonToss = styled.button`
    width: 100%;
    height: ${buttonSendHeight};
    font-size: 16px;
    color: ${props => props.valid ? '#376ad2' : '#CCC'};
    background: ${props => props.valid ? 'white' : '#e0e0e0'};
    transition background 0.4s ease-in-out, color 0.4s ease-in-out;
`;