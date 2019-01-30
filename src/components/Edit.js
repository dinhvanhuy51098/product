import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import FormAddEdit from './FormAddEdit';
import { connect } from 'react-redux';

class Edit extends Component{
	constructor(props){
		super(props);
		this.state={
		    item:[],
		    id:''
		};
	}
	componentWillMount(){
	    let data=this.props.data;
	    let url=decodeURIComponent(window.location.search);
      	let value=url.substring(1).split("=");
      	let id=value[1];
      	let products=data.filter((product)=>{
				return product.id===id;
			});
      	this.setState({
      		item:products
      	});
	}
	render(){
		let item=this.state.item;
		return(
			<div>
				<div className="home">
				 		<Link to="/">Trang chủ</Link>
				 </div>
				<FormAddEdit isEdit='true' item={item} />
		     </div>
		);
	}
}
const mapStateToProps=(state)=>{
	return{
		data:state.tasks
	}
}
export default connect(mapStateToProps,null)(Edit);