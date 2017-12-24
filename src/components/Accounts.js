import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Hammer from 'rc-hammerjs';

import { Wrapper, Title } from '../styles/sendContent';
import NumUtil from '../utils/num';
import sendContent from '../modules/sendContent';

let moved = 0,
    position = 0,
    nextAccountIndex = 0;

function Accounts({ mine, accountIndex, accountMove, wrapperWidth, listWidth, move, setAccontIndex }){
    const myAccounts = mine.accounts.map((a, i)=>{
        const { corporation, deposit, account } = a;
        const active = accountIndex === i;
        const context = corporation.id === 'toss' 
            ? `${NumUtil.addComma(deposit.amount)}${deposit.currency}`
            : `${corporation.shortName} ${sendContent.getEncodedAccount(account)}`;
        return(
            <AccountList w={listWidth} key={`corporation.id-${i}`}>
                <AccountContent active={active}>
                    <AccountTitle>{corporation.name}</AccountTitle>
                    <AccountContext>{context}</AccountContext>
                </AccountContent>
            </AccountList>
        )
    });

    const indicators = mine.accounts.map((ai, i)=> {
        const active = accountIndex === i;
        return <IndicatorList key={`indi-${i}`} active={active} />;
    });

    function handlePan(e){
        const { deltaX, distance} = e;
        moved = parseInt(distance, 10);

        if(moved < listWidth){
            move(position + deltaX);
        }
    }

    function handlePanEnd(e){
        const { deltaX } = e;
        const moveNext = deltaX < 0;
        const movable = moved > listWidth / 4;
        if(movable){
            if(moveNext) nextAccountIndex++;
            else nextAccountIndex--;
        }
        
        if(nextAccountIndex < 0 || nextAccountIndex > mine.accounts.length -1){
            move(position);
            if(moveNext) nextAccountIndex--;
            else nextAccountIndex++;
            return;
        }

        if(movable){
            position = listWidth * nextAccountIndex * -1;
            setAccontIndex(nextAccountIndex);
        }

        move(position);
        moved = 0;
    }

    return (
        <Account>
            <Wrapper>
                <Title>출금계좌</Title>
            </Wrapper>
            <Hammer
                onPan={handlePan}
                onPanEnd={handlePanEnd}
            >
                <AccountContainer>
                    <AccountWrapper w={wrapperWidth} left={accountMove}>
                        {myAccounts}
                    </AccountWrapper>
                </AccountContainer>
            </Hammer>
            <Indicator>
                <IndicatorWrapper>
                    {indicators}
                </IndicatorWrapper>
            </Indicator>
        </Account>
    );
}

export default Accounts

// prop types
Accounts.propTypes = {
    mine: PropTypes.object,
    accountIndex: PropTypes.number,
    accountMove: PropTypes.number,
    wrapperWidth: PropTypes.number,
    listWidth: PropTypes.number,
    move: PropTypes.func,
    setAccontIndex: PropTypes.func,
};

// styles
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

const AccountWrapper = styled.ul.attrs({
    style: ({left}) => ({transform: `translateX(${left ? left : 0}px)` })
})`
    position: relative;
    padding: 0 ${accountPadding};
    width: ${props => props.w ? `${props.w}px` : '100%'};
    transition: transform 0.2s linear;
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
    opacity: ${props => props.active ? 1 : 0.5};
    transition: opacity 0.6s ease-in-out;
`;

const AccountTitle = styled.h1`
    font-size: 14px;
    color: white;
`;

const AccountContext = styled.b`
    display: inline-block;
    margin-top: 8px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.7);
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