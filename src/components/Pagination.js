import React, { Component } from 'react';
import { connect } from 'react-redux';
import 	* as actions from './../actions/index';

class Pagination extends Component{
	constructor(props){
		super(props);
		this.state={
		    currentPage: 1,
          	ProductsPerPage: 15
		};
		this.handleClick = this.handleClick.bind(this);
	}
	componentWillMount(){
	}
	handleClick(number) {
		this.setState({
          currentPage: number
        });
        this.props.onPagination(number);
    }
	render(){
		let pageNumbers=this.props.pageNumbers;
		let currentPage=this.props.currentPage;
        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <li
              key={number}
              id={number}
              onClick={()=>this.handleClick(number)}
              className={currentPage===number? 'active' : ''}
            >
              {number}
            </li>
          );
        });
		return(
			<ul id="page-numbers">
	             {renderPageNumbers}
	        </ul>
		);
	}
}
const mapStateToProps=(state)=>{
	return{	}
};

const mapDispatchToProps=(dispatch, props) =>{
	return{
		onPagination: (number) => {
			dispatch(actions.paginationTask(number));
		}

	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Pagination);