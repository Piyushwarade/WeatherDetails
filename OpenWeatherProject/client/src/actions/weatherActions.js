import * as types from '../constants/weatherActionTypes';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../../node_modules/react-toastify/scss/main.scss';

let weatherAction = {
	weather:function(value){
		let reqdObject = {
			'city':value
		};
		return function (dispatch) {
			axios({
				method: 'get',
				responseType: 'JSON',
				url: 'http://localhost:3001/weather',
				params:reqdObject,
				headers: {
					'Access-Control-Allow-Origin':'*'
				}
			}).then(function (response) {
				if(response.status===200&&response.data.cod==='200'){
					toast.success('City Temperature retrieved successfully');
					dispatch(
						{
							type: types.WEATHER,
							payload: response.data
						}
					);
				}else if(response.data.statusCode===404&&response.status===200){
					toast.error('Please Enter Valid City Name');
					dispatch(
						{
							type: types.WEATHER,
							payload: response.data
						}
					);
				}else if(response.data.statusCode===400&&response.status===200){
					toast.error('Please Enter City Name');
					dispatch(
						{
							type: types.WEATHER,
							payload: response.data
						}
					);
				}
			})
				.catch(err=>{
					dispatch(
						{
							type: types.WEATHER,
							payload: err
						}
					);
				});
		};

	}

};
export default weatherAction;