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
            accountMove: 0,
            accountIndex: 0,
            tossAmount: 0,
        };

        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.setWidth = this.setWidth.bind(this);
        this.setAccontIndex = this.setAccontIndex.bind(this);
        this.move = this.move.bind(this);
        this.send = this.send.bind(this);
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
        if(listUpdated) this.setWidth();
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.setWidth);
    }

    fetch(json){
        const amount        = json.amount;
        const mine          = json.mine;
        const listLength    = mine.accounts.length;
        this.setState({ amount, mine, listLength });
    }

    handleAmountChange(e){
        const { currency, limit } = this.state.amount;
        const t = e.target;
        const input = NumUtil.removeComma(t.value.replace(currency, ''));
        const value = input > limit.remain ? limit.remain  : input;
        this.setState({
            [t.name]: value
        });
    }

    setWidth(){
        const { accountIndex } = this.state;
        const width = sendContent.getWidth(this.state.listLength);
        this.setState({
            listWidth: width.list,
            wrapperWidth: width.wrapper,
            accountMove: width.list * accountIndex * -1
        });
    }

    setAccontIndex(accountIndex){
        this.setState({ accountIndex });
    }


    move(accountMove){
        this.setState({
            accountMove
        });
    }

    send(){
        const { mine, tossAmount, accountIndex } = this.state;
        const account = mine.accounts[accountIndex];
        const payload = {
            userId: mine.id,
            amount: tossAmount,
            account: {
                id: account.corporation.id,
                account: account.account,
                fee: account.fee,
            }
        };
        console.log('Payload: ', payload);
    }

    render(){
        const {
            amount, mine, tossAmount,
            accountMove, accountIndex, listWidth, wrapperWidth,
        } = this.state;

        return (
            <Content>
                <Amount
                    amount={amount}
                    tossAmount={tossAmount}
                    handleAmountChange={this.handleAmountChange}
                />
                <Accounts
                    mine={mine}
                    accountMove={accountMove}
                    accountIndex={accountIndex}
                    wrapperWidth={wrapperWidth}
                    listWidth={listWidth}
                    move={this.move}
                    setAccontIndex={this.setAccontIndex}
                />
                <ButtonSend
                    mine={mine}
                    tossAmount={tossAmount}
                    accountIndex={accountIndex}
                    send={this.send}
                />
            </Content>
        );
    }
}

export default SendContent


const Content = styled.section`
    position: relative;
`;