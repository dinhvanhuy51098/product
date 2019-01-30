import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import FormAddEdit from './FormAddEdit';
class Add extends Component{
	constructor(props){
		super(props);
		this.state={
		};
	}
	render(){
		return(
			<div>
				<div className="home">
				 		<Link to="/">Trang chủ</Link>
				 </div>
				<FormAddEdit isEdit='false' />
		     </div>
		);
	}
}
export default Add;