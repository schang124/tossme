import React from 'react';
import styled from 'styled-components';
import sendContent from '../modules/sendContent';

class SendContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listWidth: '300px',
            wrapperWidth: '300px',
            listLength: 2,
        };

        this.setWidth = this.setWidth.bind(this);
    }

    componentDidMount(){
        this.setWidth(this.state.listLength);
        window.addEventListener('resize', this.setWidth);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.setWidth);
    }

    setWidth(){
        const width = sendContent.getWidth(this.state.listLength);
        this.setState({
            listWidth: width.list,
            wrapperWidth : width.wrapper
        });
    }

    render(){
        const {listWidth, wrapperWidth} = this.state;
        return (
            <Content>
                <Amount>
                    <Wrapper>
                        <Title>보낼 금액</Title>
                        <Input type="text"/>
                    </Wrapper>
                </Amount>
                <Account>
                    <Wrapper>
                        <Title>출금계좌</Title>
                    </Wrapper>
                    <AccountContainer>
                        <AccountWrapper w={wrapperWidth}>
                            <AccountList w={listWidth}>
                                <AccountContent>
                                    <AccountTitle>Toss 주계좌</AccountTitle>
                                    <AccountAmount>142,000원</AccountAmount>
                                </AccountContent>
                            </AccountList>
                            <AccountList w={listWidth}>
                                <AccountContent>
                                    <AccountTitle>Toss 주계좌</AccountTitle>
                                    <AccountAmount>142,000원</AccountAmount>
                                </AccountContent>
                            </AccountList>
                        </AccountWrapper>
                    </AccountContainer>
                    <Indicator>
                        <IndicatorWrapper>
                            <IndicatorList />
                            <IndicatorList />
                        </IndicatorWrapper>
                    </Indicator>
                </Account>
            </Content>
        );
    }
}

export default SendContent

const side = '25px';

const Content = styled.section`
    position: relative;
`;

const Wrapper = styled.div`
    margin: 0 ${side};
`;

const Amount = styled.div`
    padding-top: 54px;     
`;

const Title = styled.h1`
    font-size: 12px;
    color: white;
    opacity: 0.5;
`;

const Input = styled.input.attrs({
    className: 'w300',
})`
    width: 100%;
    height: 32px;
    font-size: 16px;
    color: white;
    background: transparent;
    border: 0;
    outline: 0; 
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
`;

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
    padding: 0 ${accountPadding};
    width: ${props => props.w ? props.w : '100%'};
`;

const AccountList = styled.li`
    display: inline-block;
    padding: 0 3px;
    width: ${props => props.w ? props.w : '80%'};
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