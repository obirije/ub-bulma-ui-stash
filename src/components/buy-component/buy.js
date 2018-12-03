import React, { Component } from 'react';
import DashboardNav from '../dashboard-nav';

import Select from 'react-select';
import axios from 'axios';

import { Link } from 'react-router-dom';

const fiatCurr = [
  { value: 'NGN', label: 'NGN' },
  { value: 'USD', label: 'USD' }
];

const cryptoCurr = [
  { value: 'BTC', label: 'BTC' },
  { value: 'ETH', label: 'ETH' }
];

export default class Buy extends Component {
	constructor(props){
		super(props)

		this.state = {
	        fiatSelectedOption: { value: 'NGN', label: 'NGN' },
	        cryptoSelectedOption: { value: 'BTC', label: 'BTC' },
	        fiatAmount: '0.00',
	        cryptoAmount: '0.00',
	        BTC_USD: null,
	        ETH_USD: null,
	        ngnRate: 363
      }
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
                return amount / rate;
            }

            if(toCurr === 'ETH'){
                const rate = this.state.ETH_USD ? this.state.ETH_USD : 0;
                return amount / rate;
            }
        }

        if(fromCurr === 'NGN'){

            if(toCurr === 'BTC'){
                const rate = this.state.BTC_USD ? this.state.BTC_USD : 0;
                return amount / (ngn * rate);
            }

            if(toCurr === 'ETH'){
                const rate = this.state.ETH_USD ? this.state.ETH_USD : 0;
                return amount / (rate * ngn);
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

	render(){

		return(
			
			<div>
				<DashboardNav />

				<div class="dashboard-wrapper">

					<div className="columns is-vcentered">
		                <div className="column is-6 is-offset-3">
		                    <div className="info-block has-text-centered">
		                        <h4 class="title is-3 text-bold">Buy Crypto</h4>  
		                    </div>
		                </div>
		            </div>

					<div class="mt-10 column is-9 is-offset-2">
                            <div class="columns is-vcentered">
                                <div class="column is-7 is-offset-2">
                                    <div class="flex-card light-bordered raised converter-card-radius">

                                        <div class="card-body">
                                            <form class="padding-20">
                                                <div class="control-material is-primary">      
                                                    <Select
                                                        value={this.state.fiatSelectedOption}
                                                        onChange={this.handleFiatChange}
                                                        options={fiatCurr}
                                                        className='is-large'
                                                      />
                                                </div>
                                                <div class="control-material is-primary">      
                                                    <input class="material-input" type="number" name="fiatAmount"
                                                        value={this.state.fiatAmount} 
                                                        onChange={this.handleAmountChange} 
                                                    />
                                                    <span class="material-highlight"></span>
                                                    <span class="bar"></span>
                                                    <label>Amount</label>
                                                </div>
                                                <div class="control-material is-primary">      
                                                    <div class="input-field">
                                                        <Select
                                                            value={this.state.cryptoSelectedOption}
                                                            onChange={this.handleCryptoChange}
                                                            options={cryptoCurr}
                                                          />
                                                    </div>
                                                </div>
                                                <div class="control-material is-primary">      
                                                    <input class="material-input" id="cryptoAmount" 
                                                        type="number"
                                                        name="cryptoAmount"
                                                        value={this.state.cryptoAmount}
                                                        onChange={this.handleAmountChange} 
                                                    />
                                                    <span class="material-highlight"></span>
                                                    <span class="bar"></span>
                                                    <label>Amount</label>
                                                </div>
                                                <div class="mt-20 has-text-right">
                                                    <button class="button btn-align primary-btn btn-large raised">Continue</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

				</div>

			</div>
		)
	}
}