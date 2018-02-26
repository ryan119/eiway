/**
 * Created by ryan on 2018/2/21.
 */

import { combineReducers } from 'redux' ;
import authReducer from '../pages/authReducer';

export default combineReducers({
    common:authReducer ,
});
