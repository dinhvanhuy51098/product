import React, { Component } from 'react';
import { connect } from 'react-redux';
import 	* as actions from './../actions/index';
import { Redirect } from 'react-router';

class List extends Component{
	constructor(props){
		super(props);
		this.state={
			redirect: false,
			id: ''
		};
		this.handleDelete=this.handleDelete.bind(this);
		this.handleEdit=this.handleEdit.bind(this);
	}
	handleDelete(id){
		if(window.confirm('Are you sure???'))
		{
			this.props.onDeleteTask(id);
		}	
	}
	handleEdit(id){
		this.setState({ 
			id: id,
			redirect: true
		 });
	}
	render(){
		const { redirect,id } = this.state;
	    if (redirect) {
	       return <Redirect to={'/edit?id='+id}/>;
	     }	
		return(
			<div>
		        <li className="product">
		          	<p><span>Name:</span>{this.props.name}</p>
		          	<p><span>Category:</span>{this.props.category} </p>
		          	<p><span>Description:</span>{this.props.description}</p>
		          	<i className="product-delete" onClick={()=>this.handleDelete(this.props.id)}  >X</i>
		          	<i className="product-edit" onClick={()=> this.handleEdit(this.props.id)} >Edit</i>
		        </li>
		     </div>	
		);
	}
}

const mapStateToProps=(state)=>{
	return{
		data:state.tasks
	}
};

const mapDispatchToProps=(dispatch, props) =>{
	return{
		onDeleteTask: (id) => {
			dispatch(actions.deleteTask(id));
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(List);