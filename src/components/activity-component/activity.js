import React, { Component } from 'react';
import DashboardNav from '../dashboard-nav';

export default class Activity extends Component {
	constructor(props){
		super(props)


	}

	render(){

		return(
			<div>
				<DashboardNav />

				<div class="dashboard-wrapper">
					<div className="columns is-vcentered">
		                <div className="column is-6 is-offset-3">
		                    <div className="info-block has-text-centered">
		                        <h4 class="title is-3 text-bold">Transactions</h4>  
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
		<div style={{ marginTop: '4%'}}>
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
							<p className="has-text-grey-light">2.0301 BTC</p>
						</div>
						<div className="column is-2">
							<p className="has-text-grey-light">10/08/2018</p>
						</div>
						<div className="column is-1">
							<p className="has-text-success">N2,53,000</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)

}