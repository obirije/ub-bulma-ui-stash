import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';

const fiatCurr = [
  { value: 'NGN', label: 'NGN' },
  { value: 'USD', label: 'USD' }
];

const cryptoCurr = [
  { value: 'BTC', label: 'BTC' },
  { value: 'ETH', label: 'ETH' }
];

export default class Hero extends Component {

    state = {
        fiatSelectedOption: { value: 'NGN', label: 'NGN' },
        cryptoSelectedOption: { value: 'BTC', label: 'BTC' },
        fiatAmount: '0.00',
        cryptoAmount: '0.00',
        BTC_USD: null,
        ETH_USD: null,
        ngnRate: 360
      }

      handleFiatChange = (selectedOption) => {
        this.setState({
            fiatSelectedOption: selectedOption
        });
        console.log(`Option selected:`, selectedOption);
      }

      handleCryptoChange = (selectedOption) => {
        this.setState({ 
            cryptoSelectedOption: selectedOption 
        });
        console.log(`Option selected:`, selectedOption);
      }

      handleAmountChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
          [name]: value
        });

        let price = this.getRates(this.state.fiatSelectedOption.value, this.state.cryptoSelectedOption.value, value, this.state.ngnRate);

        console.log(`input entered: ${value}, price: ${price}`);

        let updateCrypto = name === 'fiatAmount' ? 'cryptoAmount' : 'fiatAmount';

        this.setState({
            [updateCrypto]: price
        })
      }

      getRates = (fromCurr, toCurr, amount, ngn) => { 
        if(fromCurr === 'USD' ){

            if(toCurr === 'BTC'){
                const rate = this.state.BTC_USD ? this.state.BTC_USD : 0;
                return amount * rate;
            }

            if(toCurr === 'ETH'){
                const rate = this.state.ETH_USD ? this.state.ETH_USD : 0;
                return amount * rate;
            }
        }

        if(fromCurr === 'NGN'){

            if(toCurr === 'BTC'){
                const rate = this.state.BTC_USD ? this.state.BTC_USD : 0;
                return amount * (rate / ngn);
            }

            if(toCurr === 'ETH'){
                const rate = this.state.ETH_USD ? this.state.ETH_USD : 0;
                return amount * (rate / ngn);
            }
        }
      }

      getExchangeRateExternal = (crypto) => {
        //const NGN = 360;
        const btc_usd_url = 'https://api.cryptonator.com/api/ticker/btc-usd';
        const eth_usd_url = 'https://api.cryptonator.com/api/ticker/eth-usd';

        const url =  crypto === 'BTC' ? btc_usd_url : eth_usd_url

        axios.get(url).then( res => {

            if(!res.data.success){

                console.log("error from api getting btc_usd ", res.data);
                return
            }

            console.log(`PRICE - ${crypto}`, res.data.ticker.price);

            const price = Number(res.data.ticker.price);
            const timestamp = res.data.ticker.timestamp;

            // const btc_ngn = btc_usd * NGN;

            const curr_pair = crypto === 'BTC' ? 'BTC_USD' : 'ETH_USD'; 

            this.setState({
                [curr_pair]: price,
            });

            //this.getAssetsRates(selectedCryptoy, xlm_usd_url, NGN);
            
        }).catch( err => {
            console.log(`error getting btc rate from ${url}`, err);
        });

      }

      componentDidMount(){
        this.getExchangeRateExternal('BTC')
        this.getExchangeRateExternal('ETH')

      }

  render() {
    return (
        <div class="container">
            <div class="row d-flex header-banner align-items-center">
                <div class="col l5">
                    <h2>Buy Bitcoin using a credit or debit card </h2>
                    <p class="m-t-40"><span class="font-bold">Fast, Easy </span> and <span class="font-bold">Secure</span></p>
                    <div>
                        <a href="#demos" class="waves-effect waves-light btn blue accent-4 m-t-40 m-b-40 dm-btn">Login</a>
                        <a href="https://themeforest.net/item/materialart-powerful-material-admin-template/22511427?ref=Maruti" class="waves-effect waves-light btn indigo darken-1 m-t-40 m-b-40 m-l-10">Register</a>
                    </div>
                    <img src="static/assets/images/cc.png" width="150" alt="logos" />
                </div>
                <div class="col l6 s12 m8 right-align p-l-40 m-t-40">
                    <div class="card converter-card-radius">
                            <div class="card-content white-gradient">
                                    <div class="row">
                                        <div class="input-field">
                                            
                                            <Select
                                                value={this.state.fiatSelectedOption}
                                                onChange={this.handleFiatChange}
                                                options={fiatCurr}
                                              />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <input id="fiatAmount" 
                                                type="number" name="fiatAmount"
                                                value={this.state.fiatAmount} 
                                                onChange={this.handleAmountChange} />
                                            <label class="active" for="fiatAmount">Amount</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field">
                                            <Select
                                                value={this.state.cryptoSelectedOption}
                                                onChange={this.handleCryptoChange}
                                                options={cryptoCurr}
                                              />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <input id="cryptoAmount" 
                                                type="number"
                                                name="cryptoAmount"
                                                value={this.state.cryptoAmount}
                                                onChange={this.handleAmountChange} />
                                            <label class="active" for="cryptoAmount">Amount</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <button class="btn cyan waves-effect waves-light right" name="action">Continue
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
  }
}

// <img class="img-shadow responsive-img" src="static/assets/images/db.jpg" alt="db" />