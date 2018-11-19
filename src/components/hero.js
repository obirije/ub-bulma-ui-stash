import React, { Component } from 'react';

export default class Hero extends Component {
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
                <div class="col l6 right-align p-l-40 m-t-40">
                    <div class="card converter-card-radius">
                            <div class="card-content">
                                <h5 class="card-title left m-b-30">Currency Converter</h5>
                                <form>
                                    <div class="row">
                                        <div class="input-field">
                                            <select class="browser-default">
                                                <option value="" disabled selected>Select currency</option>
                                                <option value="1">USD</option>
                                                <option value="2">NGN</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <input id="email3" type="email" />
                                            <label for="email3">Amount</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field">
                                            <select class="browser-default">
                                                <option value="" disabled selected>Select currency</option>
                                                <option value="1">BTC</option>
                                                <option value="2">ETH</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <input id="email3" type="email" />
                                            <label for="email3">Amount</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <button class="btn cyan waves-effect waves-light right" type="submit" name="action">Continue
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
  }
}

// <img class="img-shadow responsive-img" src="static/assets/images/db.jpg" alt="db" />