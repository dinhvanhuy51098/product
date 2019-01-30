import React, { Component } from 'react';
import { connect } from 'react-redux';
import 	* as actions from './../actions/index';

class Search extends Component{
	constructor(props){
		super(props);
		this.state={
			strSearch:''
		};
		this.handleSearch=this.handleSearch.bind(this);
		this.handleChange=this.handleChange.bind(this);
	}
	handleSearch(){
		this.props.onSearch(this.state.strSearch);
	}
	handleChange(event){
		this.setState({strSearch:event.target.value});
	}
	render(){
		return(
			<div className="mychoice">              
	              <input value={this.state.strSearch} onChange={this.handleChange} className="search"  type="text" name="find" placeholder="Tìm kiếm..." />
	              <input type="submit" name="search" className="btn" value="Tìm kiếm" onClick={this.handleSearch}/>
	        </div>
		);
	}
}
const mapStateToProps=(state)=>{
	return{	}
};

const mapDispatchToProps=(dispatch, props) =>{
	return{
		onSearch: (keyword) => {
			dispatch(actions.searchTask(keyword));
		}

	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);