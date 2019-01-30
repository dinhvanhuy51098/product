import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import List from './List';
import Search from './Search';
import Pagination from './Pagination';
import { connect } from 'react-redux';

class Home extends Component{
	constructor(props){
		super(props);
		this.state={
		    currentPage: 1,
          	ProductsPerPage: 15
		};
	}
	componentWillMount(){
	    if(localStorage.getItem('PRODUCT_DATA')==null)
	      	localStorage.setItem('PRODUCT_DATA',JSON.stringify(this.props.data));
	}
	render(){
		//let dataOrigin=this.state.data;
		let dataOrigin=this.props.data;
		const search=this.props.strSearch;
		let data=[];
    	if(search.length>0){
    		dataOrigin.forEach((product)=>{
    			let s1=search.toLowerCase();
    			let s2=product.name.toLowerCase();
    			if(s2.includes(s1)){
    				data.push(product);
    			}
    		});
    	}else{
    		data=dataOrigin;
    	}
    	const currentPage=this.props.currentPage;
    	const {  ProductsPerPage } = this.state;
        const indexOfLastProduct = currentPage * ProductsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - ProductsPerPage;
        const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);
        const element=currentProducts.map((product,index)=>{
		      return(
		        <List
		        	key={index}
		          	id={product.id}
		          	name={product.name}
		          	category={product.category}
		          	description={product.description}>
        		</List> );
        
    		});
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(data.length / ProductsPerPage); i++) {
          pageNumbers.push(i);
        }
		return(
			<div>
		        <div className="product-form">
		            <div className="home">
		                <a href="/" >Trang chủ</a>
		            </div>
		            <Search />
		            <div className="clear"></div>
		            <div className="btnadd">
	          			<Link to="/add" >Thêm sản phẩm</Link>
	      			</div> 
		            <div className="clear"></div>
		        </div>
		        <div className="container">
		            <div className="content left" >
		              <ul id="products-list">{element}</ul>
		            </div>   
		        </div>
		        <Pagination pageNumbers={pageNumbers} currentPage={this.state.currentPage}/>
	        </div>
		);
	}
}

const mapStateToProps=(state)=>{
	return{
		data:state.tasks,
		strSearch:state.search,
		currentPage:state.pagination
	}
}
export default connect(mapStateToProps,null)(Home);