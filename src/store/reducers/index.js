import {combineReducers} from 'redux'
import home from './home';

// {home:{currentLesson:'all'},session:{user,err,msg,success}}
export default combineReducers({
  home
});