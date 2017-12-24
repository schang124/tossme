import React from 'react';
import styled from 'styled-components';
import { Wrapper, Title} from '../styles/sendContent';
import NumUtil from '../utils/num';

function Amount({ amount, tossAmount, handleAmountChange }){
    const tossAmountLabel = `${NumUtil.addComma(tossAmount)}${amount.currency}`;
    const remain = amount.limit ? NumUtil.addComma(amount.limit.remain) : 0;
    const limit = amount.limit ? NumUtil.addComma(amount.limit.daily) : 0;
    const remainOpacity = tossAmount === 0 ? 0 : 1;
    const limitOpacity = amount.limit && tossAmount >= amount.limit.remain ? 1 : 0;
    return (
        <TossAmount>
            <Wrapper>
                <Title>보낼 금액 <Daily opacity={remainOpacity}>(최대 {remain}{amount.currency})</Daily></Title>
                <InputBox>
                    <Input
                        name='tossAmount'
                        value={NumUtil.addComma(tossAmount)}
                        type="text"
                        onChange={handleAmountChange}
                    />
                    <InputLabel>{tossAmountLabel}</InputLabel>
                </InputBox>
                <Limit opacity={limitOpacity}>1일 {limit}{amount.currency} 까지만 이체할 수 있습니다.</Limit>
            </Wrapper>
        </TossAmount>
    );
};

export default Amount

const inputHeight = '32px';

const TossAmount = styled.div`
    padding-top: 54px;     
`;

const InputBox = styled.div`
    position: relative;
    font-size: 0;
`;

const Input = styled.input.attrs({
    className: 'w300',
})`
    width: 100%;
    height: ${inputHeight};
    font-size: 16px;
    color: transparent;
    background: transparent;
    border: 0;
    outline: 0; 
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
`;

const InputLabel = styled.h1`
    position: absolute;
    top: 0;
    left: 0; 
    font-size: 16px;
    line-height: ${inputHeight};
    color: white;
`;

const Daily = styled.span`
    opacity: ${props => props.opacity ? props.opacity : 0};
    transition: opacity 0.3s ease-in-out;
`;

const Limit = styled.span.attrs({
    className: 'w300'
})`
    position: absolute;
    padding-top: 6px;
    font-size: 12px;
    color: orange;
    opacity: ${props => props.opacity ? props.opacity : 0};
    transition: opacity 0.3s ease-in-out;
    
`;