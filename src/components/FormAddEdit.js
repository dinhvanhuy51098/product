import React, { Component } from 'react';
import { connect } from 'react-redux';
import 	* as actions from './../actions/index';
import { Redirect } from 'react-router';

class FormAddEdit extends Component{
	constructor(props){
		super(props);
		this.state={
			id:'',
			nameproduct:'',
			category:'Thời trang nam',
			description:'',
			redirect: false
		};
		this.handleEdit=this.handleEdit.bind(this);
		this.handleChange=this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	componentWillMount(){
		let isEdit=this.props.isEdit;
		if(isEdit==='true'){
			let items=this.props.item;
			let data;
			items.forEach((item)=>{
				data=item
			})
			this.setState({
				id: data.id,
				nameproduct: data.name,
				category: data.category,
				description: data.description
			});
		}
		
	}
	handleSubmit(event){
		const uuidv4=require('uuid/v4');
		let item={
			id: uuidv4(),
			name:this.state.nameproduct,
			category:this.state.category,
			description:this.state.description
		}
		this.props.onAddTask(item);	
		this.onClear();
		alert("Them thanh cong");
	}
	onClear = () =>{
		this.setState({
			nameproduct:'',
			category:'Thời trang nam',
			description:''
		});
	}
	handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
	handleEdit(event){
		let item={
			id: this.state.id,
			name:this.state.nameproduct,
			category:this.state.category,
			description:this.state.description
		}
		this.props.onEditTask(item);
		//window.location='/';	
		this.setState({ redirect: true });
	}
	handleChange(event){
		const target=event.target;
		const value=target.value;
		const name=target.name;
		this.setState({
			[name]:value
		});
		
	}
	render(){
		const { redirect } = this.state;
	    if (redirect) {
	       return <Redirect to='/'/>;
	     }	
		let isEdit=this.props.isEdit;
		return(
				<div className="container">
			        <div className="content product-form">
				        <div className="form-group">
				            <label className="label" >Name</label>
				            <input  value={this.state.nameproduct} onChange={this.handleChange} className="input" type="text" name="nameproduct" placeholder="Enter name..." />
				        </div>
				        <div className="form-group">
				            <label className="label" >Category</label>
				            <select value={this.state.category} onChange={this.handleChange} className="intput" id="choice" name="category">
				              <option value="Thời trang nam">Thời trang nam</option>
				              <option value="Thời trang nữ">Thời trang nữ</option>
				              <option value="Đồ trẻ em">Đồ trẻ em</option>
				            </select>
				        </div>
				        <div className="form-group">
				            <label className="label" >Description</label>
				            <input value={this.state.description} onChange={this.handleChange} className="input" type="text" name="description" placeholder="Enter description..." />
				        </div>
				        <div className="form-group">
				            <button className="createProduct" type="button" name="button" onClick={isEdit==='true'?this.handleEdit:this.handleSubmit} >Submit</button>
				        </div>
			        </div>
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
		onAddTask: (task) => {
			dispatch(actions.addTask(task));
		},
		onEditTask: (task) => {
			dispatch(actions.editTask(task));
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(FormAddEdit);