/**
 * Created by ryan on 2018/2/21.
 */
import { FETCH_CURRENT_USER } from '../constants/actionTypes' ;

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_CURRENT_USER:
            return action.payload.data || false ;
        default:
            return state ;
    }

}