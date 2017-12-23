import React from 'react';
import styled from 'styled-components';
import { Wrapper, Title} from '../styles/sendContent';
import NumUtil from '../utils/num';

function Amount({ amount, tossAmount, handleAmountChange }){
    const tossAmountLabel = `${NumUtil.addComma(tossAmount)}${amount.currency}`;
    return (
        <TossAmount>
            <Wrapper>
                <Title>보낼 금액</Title>
                <InputBox>
                    <Input
                        name='tossAmount'
                        value={tossAmount}
                        type="text"
                        onChange={handleAmountChange}
                    />
                    <InputLabel>{tossAmountLabel}</InputLabel>
                </InputBox>
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