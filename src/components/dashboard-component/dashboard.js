import React, { Component } from 'react';
import DashboardNav from '../dashboard-nav';

export default class Dashboard extends Component {
	constructor(props){
		super(props)

	}

	render(){

		return(
			<div>
				<DashboardNav />

				<div class="dashboard-wrapper">
					<div class="columns">
                    	<div class="column">
                        	<div id="main-dashboard" class="section-wrapper">
								<div class="columns dashboard-columns">

				                    <div class="column is-4">
				                        <div class="flex-card card-overflow light-bordered light-raised">
				                            <div class="icon-header">
				                                <i class="material-icons primary">account_balance_wallet</i>
				                            </div>
				                            <div class="content">
				                                <div class="card-title is-tile has-text-right">
				                                    Total Buys
													<div class="card-stat primary has-text-right"><span class="stat-type">$</span> 13 839,49</div>				                                </div>
				                            </div>
				                            <div class="more">
				                                <a class="primary" href="#">See all</a>
				                            </div>
				                        </div>
				                    </div>

				                    <div class="column is-4">
				                        <div class="flex-card card-overflow light-bordered light-raised">
				                            <div class="icon-header">
				                                <i class="material-icons primary">account_balance</i>
				                            </div>
				                            <div class="content">
				                                <div class="card-title is-tile has-text-right">
				                                    Total Sells
				                                    <div class="card-stat primary has-text-right"><span class="stat-type">$</span> 122 839,49</div>
				                                </div>
				                            </div>
				                            <div class="more">
				                                <a class="primary" href="#">See all</a>
				                            </div>
				                        </div>
				                    </div>

				                    <div class="column is-4">
                                        <div class="flex-card card-overflow light-bordered light-raised">
                                            <div class="icon-header">
                                                <i class="material-icons primary">work</i>
                                            </div>
                                            <div class="content">
                                                <div class="card-title is-tile has-text-right">
                                                    Total Wallet Amount 
                                                    <div class="card-stat secondary has-text-right"><span class="stat-type">coming soon!</span></div>
                                                </div>
                                            </div>
                                            <div class="more">
                                               
                                            </div>
                                        </div>
                                    </div>

				                </div>
				            </div>
				        </div>
				    </div>

				    <Transactions />
				</div>
			</div>
		)
	}
}

const Transactions = (props) => {

	return(
		<div style={{ marginTop: '7%'}}>
			<div className="tile is-ancestor" id="transaction" style={{ cursor: 'pointer', marginRight: '5px'}}>
				<div className="tile is-child notification box is-white">
					<div className="columns">
						<div className="column is-1" >
							<span style={{ width: '70px'}} className={`tag is-rounded is-info`}>pending</span>
						</div>
						<div className="column is-5">
							<p className="has-text-grey-dark">Card payment completed with card ****4246</p>
						</div>
						<div className="column is-2">
							<p className="has-text-grey-light">0.0001 BTC</p>
						</div>
						<div className="column is-2">
							<p className="has-text-grey-light">1 hour ago</p>
						</div>
						<div className="column is-1">
							<p className="has-text-success">N12,000</p>
						</div>
					</div>
				</div>
			</div>

			<div className="tile is-ancestor" id="transaction" style={{ cursor: 'pointer', marginRight: '5px'}}>
				<div className="tile is-child notification box is-white">

					<div className="columns">
						<div className="column is-1" >
							<span style={{ width: '70px'}} className={`tag is-rounded is-success`}>successful</span>
						</div>
						<div className="column is-5">
							<p className="has-text-grey-dark">Card payment completed with card ****4266</p>
						</div>
						<div className="column is-2">
							<p className="has-text-grey-light">0.0301 BTC</p>
						</div>
						<div className="column is-2">
							<p className="has-text-grey-light">6 hours ago</p>
						</div>
						<div className="column is-1">
							<p className="has-text-success">N32,000</p>
						</div>
					</div>
				</div>
			</div>

			<div className="tile is-ancestor" id="transaction" style={{ cursor: 'pointer', marginRight: '5px'}}>
				<div className="tile is-child notification box is-white">

					<div className="columns">
						<div className="column is-1" >
							<span style={{ width: '70px'}} className={`tag is-rounded is-success`}>successful</span>
						</div>
						<div className="column is-5">
							<p className="has-text-grey-dark">Card payment completed with card ****4296</p>
						</div>
						<div className="column is-2">
							<p className="has-text-grey-light">0.1701 BTC</p>
						</div>
						<div className="column is-2">
							<p className="has-text-grey-light">1 day ago</p>
						</div>
						<div className="column is-1">
							<p className="has-text-success">N43,000</p>
						</div>
					</div>
				</div>
			</div>

			<div className="tile is-ancestor" id="transaction" style={{ cursor: 'pointer', marginRight: '5px'}}>
				<div className="tile is-child notification box is-white">

					<div className="columns">
						<div className="column is-1" >
							<span style={{ width: '70px'}} className={`tag is-rounded is-danger`}>failed</span>
						</div>
						<div className="column is-5">
							<p className="has-text-grey-dark">Card payment completed with card ****4296</p>
						</div>
						<div className="column is-2">
							<p className="has-text-grey-light">1.0301 BTC</p>
						</div>
						<div className="column is-2">
							<p className="has-text-grey-light">11/08/2018</p>
						</div>
						<div className="column is-1">
							<p className="has-text-success">N1,53,000</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)

}