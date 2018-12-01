import React, { Component } from 'react';
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

export default class Hero extends Component {

    state = {
        fiatSelectedOption: { value: 'NGN', label: 'NGN' },
        cryptoSelectedOption: { value: 'BTC', label: 'BTC' },
        fiatAmount: '0.00',
        cryptoAmount: '0.00',
        BTC_USD: null,
        ETH_USD: null,
        ngnRate: 363
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

  render() {
    return (
        <div>
        <div id="main-hero" class="hero-body is-clean">
                <div class="container has-text-centered">
                    <div class="columns is-vcentered mt-40">
                        <div class="column is-5 caption-column has-text-left">
                            <h1 class="clean-title light-text">
                                Buy Bitcoin using a credit or debit card
                            </h1>
                            <div class="subtitle is-5 no-margin">
                                <p class="m-t-40"><span class="font-bold">Fast, Easy </span> and <span class="font-bold">Secure</span></p>
                            </div>
                            <div class="cta-wrapper has-text-left">
                                <Link to="login" class="button button-cta btn-align is-bold light-btn">
                                    Get Started
                                </Link>
                                <div class="is-hidden-mobile">
                                    <img src="static/assets/images/cc.png" width="150" alt="logos" style={{ paddingTop: '17px'}} />
                                </div>
                            </div>
                        </div>

                        <div class="mt-80 column is-9 is-offset-1">
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
        </div>

        <Features />

        </div>
    );
  }
}

const Features = () => {

    return(
        <section id="values" class="section section-feature-grey is-medium">
            <div class="container">
                <div class="section-title-wrapper has-text-centered">
                    <div class="clean-bg-symbol"><i class="fa fa-gg"></i></div>
                    <div>
                        <h2 class="clean-section-title">Trusted digital currency platform</h2>
                        <h3 class="subtitle is-5 pt-10">
                            Here are a few reasons why you should choose UncleBanks
                        </h3>
                    </div>
                </div>
        
                <div class="content-wrapper">
                    <div class="columns is-vcentered">
                        <div class="column is-4">
                            <div class="floating-circle levitate is-icon-reveal">
                                <img src="static/assets/images/illustrations/icons/landing-v1/globe-pointer.svg" alt="" />
                            </div>
                            <div class="has-text-centered mt-20">
                                <span class="clean-text">Easy from anywhere</span>
                            </div>
                        </div>

                        <div class="column is-4">
                            <div class="floating-circle levitate delay-2 is-icon-reveal">
                                <img src="static/assets/images/illustrations/icons/landing-v1/cash.svg" alt="" />
                            </div>
                            <div class="has-text-centered mt-20">
                                <span class="clean-text">Buy fast</span>
                            </div>
                        </div>

                        <div class="column is-4">
                            <div class="floating-circle levitate delay-4 is-icon-reveal">
                                <img src="static/assets/images/illustrations/icons/landing-v1/credit-card.svg" alt="" />
                            </div>
                            <div class="has-text-centered mt-20">
                                <span class="clean-text">Secured payments</span>
                            </div>
                        </div>
                    </div>

                    <div class="has-text-centered is-title-reveal pt-40 pb-40">
                        <a href="landing-v1-signup.html" class="button button-cta btn-align raised primary-btn">
                            Buy now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

// <div class="container">
//             <div class="row d-flex header-banner align-items-center">
//                 <div class="col l5">
//                     <h2>Buy Bitcoin using a credit or debit card </h2>
//                     <p class="m-t-40"><span class="font-bold">Fast, Easy </span> and <span class="font-bold">Secure</span></p>
//                     <div>
//                         <Link to="login" class="waves-effect waves-light btn blue accent-4 m-t-40 m-b-40 dm-btn">Login</Link>
//                         <Link to="register" class="waves-effect waves-light btn indigo darken-1 m-t-40 m-b-40 m-l-10">Register</Link>
//                     </div>
//                     <img src="static/assets/images/cc.png" width="150" alt="logos" />
//                 </div>
//                 <div class="col l6 s12 m8 right-align p-l-40 m-t-40">
//                     <div class="card converter-card-radius">
//                             <div class="card-content white-gradient">
//                                     <div class="row">
//                                         <div class="input-field">
                                            
//                                             <Select
//                                                 value={this.state.fiatSelectedOption}
//                                                 onChange={this.handleFiatChange}
//                                                 options={fiatCurr}
//                                               />
//                                         </div>
//                                     </div>
//                                     <div class="row">
//                                         <div class="input-field col s12">
//                                             <input id="fiatAmount" 
//                                                 type="number" name="fiatAmount"
//                                                 value={this.state.fiatAmount} 
//                                                 onChange={this.handleAmountChange} />
//                                             <label class="active" for="fiatAmount">Amount</label>
//                                         </div>
//                                     </div>
//                                     <div class="row">
//                                         <div class="input-field">
//                                             <Select
//                                                 value={this.state.cryptoSelectedOption}
//                                                 onChange={this.handleCryptoChange}
//                                                 options={cryptoCurr}
//                                               />
//                                         </div>
//                                     </div>
//                                     <div class="row">
//                                         <div class="input-field col s12">
//                                             <input id="cryptoAmount" 
//                                                 type="number"
//                                                 name="cryptoAmount"
//                                                 value={this.state.cryptoAmount}
//                                                 onChange={this.handleAmountChange} />
//                                             <label class="active" for="cryptoAmount">Amount</label>
//                                         </div>
//                                     </div>
//                                     <div class="row">
//                                         <div class="input-field col s12">
//                                             <button class="btn cyan waves-effect waves-light right" name="action">Continue
//                                             </button>
//                                         </div>
//                                     </div>
//                             </div>
//                         </div>
//                 </div>
//             </div>
//         </div>

