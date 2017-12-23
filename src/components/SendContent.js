import React from 'react';
import styled from 'styled-components';
import sendContent from '../modules/sendContent';

import { Amount, Accounts, ButtonSend } from '../components';
import NumUtil from '../utils/num';
import transfer from '../json/transfer.json';

class SendContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            amount: {},
            mine: {
                accounts: [],
            },
            listWidth: '300px',
            wrapperWidth: '300px',
            listLength: 0,
            accountMsg: '',
            tossAmount: 0,
        };

        this.setWidth = this.setWidth.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
    }

    componentDidMount(){
        // fetch
        this.fetch(transfer);

        // ui
        this.setWidth(this.state.listLength);
        window.addEventListener('resize', this.setWidth, false);
    }

    componentDidUpdate(prevProps, prevState){
        const { listLength } = this.state;
        const listUpdated = listLength !== prevState.listLength;
        if(listUpdated) this.setWidth(listLength);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.setWidth);
    }

    fetch(json){
        const amount        = json.amount;
        const mine          = json.mine;
        const listLength    = mine.accounts.length;
        const accountMsg    = mine.accounts[0].validate.msg;
        this.setState({ amount, mine, listLength, accountMsg });
    }

    setWidth(){
        const width = sendContent.getWidth(this.state.listLength);
        this.setState({
            listWidth: width.list,
            wrapperWidth : width.wrapper
        });
    }

    handleAmountChange(e){
        const { currency } = this.state.amount;
        const t = e.target;
        const value = NumUtil.removeComma(t.value.replace(currency, ''))
        this.setState({
            [t.name]: value
        })
    }

    render(){
        const { amount, mine, listWidth, wrapperWidth, tossAmount, accountMsg } = this.state;

        return (
            <Content>
                <Amount
                    amount={amount}
                    tossAmount={tossAmount}
                    handleAmountChange={this.handleAmountChange}
                />
                <Accounts
                    mine={mine}
                    wrapperWidth={wrapperWidth}
                    listWidth={listWidth}
                />
                <ButtonSend accountMsg={accountMsg} />
            </Content>
        );
    }
}

export default SendContent


const Content = styled.section`
    position: relative;
`;