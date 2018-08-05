import React,{Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import weatherAction from '../actions/weatherActions';
import 'reactstrap/lib';
import {ToastContainer } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css';

class Weather extends Component {
	constructor(props){
		super(props);
		//state update is not needed to not using state variable
		this.state = {
			city: ''
		};
		this.getWeatherDetails = this.getWeatherDetails.bind(this);
	}
	getWeatherDetails(){
		this.props.weatherAction.weather(this.state.city);
	}
	handleChange (event) {
		this.setState({city:event.target.value});
	}
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<nav className="navbar navbar-light" style={{'backgroundColor': 'rgba(51, 192, 210,0.4)', 'fontSize': '30px'}}>
							Weather Details
						</nav>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
					</div>
					<div className="col-md-4">
						<div>
							<label>
								Enter City
							</label>
							<input onChange={(event)=>this.handleChange(event)} className="form-control"/>
						</div>
						<br/>
						<button onClick={this.getWeatherDetails} style={{'backgroundColor': 'rgba(51, 192, 210,0.4)'}}>
							Submit
						</button>
						<br/>
						<span className="clearfix"></span>
					</div>
					<div className="col-md-4">
					</div>
				</div>
				<div className="row">
					<div className="col-md-3">
					</div>
					<div className="col-md-6">
						<table className="table">
							<thead>
								<tr>
									<th style={{ 'textAlign': 'center' }}>
										Date
									</th>
									<th style={{ 'textAlign': 'center' }}>
										Temperature
									</th>
									<th style={{ 'textAlign': 'center' }}>
										Pressure
									</th>
									<th style={{ 'textAlign': 'center' }}>
										Wind Speed
									</th>
									<th style={{ 'textAlign': 'center' }}>
										Weather Description
									</th>
								</tr>
							</thead>
							<tbody>
								{this.props.data?this.props.data.map((tempData)=>{ return (
									<tr key={tempData.dt_txt}>
										<td>{tempData.dt_txt}</td>
										<td>{tempData.main.temp}</td>
										<td>{tempData.main.pressure}</td>	
										<td>{tempData.wind.speed}</td>
										<td>{tempData.weather?tempData.weather.map((details)=>{
											return(<option>{details.description}</option>)
										},this):''}</td>																																							
									</tr>
								);
								},this):''}
							</tbody>
						</table>
					</div>
					<div className="col-md-3">
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
					</div>
					<div className="col-md-4">
					</div>
					<div className="col-md-4">
					</div>
				</div>
				<ToastContainer/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		data:state.weather.list
	};
};

const mapDispatchToProps= dispatch=> {
	return {
		weatherAction : bindActionCreators(weatherAction,dispatch)
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Weather);

