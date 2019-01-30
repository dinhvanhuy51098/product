import * as types from './../constants/ActionTypes';

let data=JSON.parse(localStorage.getItem('PRODUCT_DATA'));
var initialState=data ? data : [];

var myReducer=(state=initialState, action)=>{
	switch(action.type){
		case types.LIST_ALL:
			return state;
		case types.ADD_TASK:
			var item={
				id: action.task.id,
				name: action.task.name,
				category: action.task.category,
				description: action.task.description
			}
			state.push(item);
			localStorage.setItem('PRODUCT_DATA',JSON.stringify(state));
			return [...state];
		case types.DELETE_TASK:
			var id=action.id;
			state = state.filter((product)=>{
				return product.id!==id;
			});
			localStorage.setItem('PRODUCT_DATA',JSON.stringify(state));
			return [...state];
		case types.EDIT_TASK:
			state.forEach((product)=>{
    			if(product.id===action.task.id)
    			{
    				product.name=action.task.name;
    				product.category=action.task.category;
    				product.description=action.task.description;
    			}
    		});
			localStorage.setItem('PRODUCT_DATA',JSON.stringify(state));
			return [...state];
		default: return state;
	}
}

export default myReducer;