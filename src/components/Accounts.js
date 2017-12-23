import React from 'react';
import styled from 'styled-components';

import { Wrapper, Title } from '../styles/sendContent';
import NumUtil from '../utils/num';

function Accounts({ mine, wrapperWidth, listWidth }){
    const myAccounts = mine.accounts.map((a, i)=>{
        const {corporation, account, deposit, validate, fee} = a;
        return(
            <AccountList w={listWidth} key={`corporation.id-${i}`}>
                <AccountContent>
                    <AccountTitle>{corporation.name}</AccountTitle>
                    <AccountAmount>{`${NumUtil.addComma(deposit.amount)}${deposit.currency}`}</AccountAmount>
                </AccountContent>
            </AccountList>
        )
    });

    return (
        <Account>
            <Wrapper>
                <Title>출금계좌</Title>
            </Wrapper>
            <AccountContainer>
                <AccountWrapper w={wrapperWidth} left={0}>
                    {myAccounts}
                </AccountWrapper>
            </AccountContainer>
            <Indicator>
                <IndicatorWrapper>
                    <IndicatorList />
                    <IndicatorList />
                </IndicatorWrapper>
            </Indicator>
        </Account>
    );
};

export default Accounts

// Account
const accountHeight = '72px';
const accountPadding = '22px';
const Account = styled.div`
    margin-top: 30px;
`;

const AccountContainer = styled.div`
    margin-top: 8px;
    width: 100%;
    overflow-x: hidden;
`;

const AccountWrapper = styled.ul`
    margin-left: ${props => props.left ? `${props.left}px` : 0};
    padding: 0 ${accountPadding};
    width: ${props => props.w ? `${props.w}px` : '100%'};
`;

const AccountList = styled.li`
    display: inline-block;
    padding: 0 3px;
    width: ${props => props.w ? `${props.w}px` : '80%'};
    box-sizing: border-box;
`;

const AccountContent = styled.div`
    padding-left: 14px;
    padding-top: 18px;
    height: ${accountHeight};
    background-color: #567ef3;
    box-sizing: border-box;
`;

const AccountTitle = styled.h1`
    font-size: 14px;
    color: white;
`;

const AccountAmount = styled.b`
    display: inline-block;
    margin-top: 8px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
`;

// Indicator
const indiSize = '7px';
const indiColor = '#54bea9';

const Indicator = styled.div`
    margin-top: 11px;
    font-size: 0;
    text-align: center;
`;

const IndicatorWrapper = styled.ul`
    display: inline-block;
`;

const IndicatorList = styled.li`
    display: inline-block;
    margin: 0 4px;
    width: ${indiSize};
    height: ${indiSize};
    border: 1px solid ${indiColor};
    box-sizing: border-box;
    border-radius: ${indiSize};
    background ${ props => props.active ? indiColor : 'transparent' }
`;