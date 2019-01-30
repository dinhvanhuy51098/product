import { combineReducers } from 'redux';
import tasks from './tasks';
import search from './search';
import pagination from './pagination';

const myReducer= combineReducers({
	tasks, //tasks: tasks
	search,
	pagination
});

export default myReducer;