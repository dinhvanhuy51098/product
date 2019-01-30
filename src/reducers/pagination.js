import * as types from './../constants/ActionTypes';

var initialState=1;

var myReducer=(state=initialState, action)=>{
	switch(action.type){
		case types.PAGINATION:
			return action.number;
		default: return state;
	}
};

export default myReducer;