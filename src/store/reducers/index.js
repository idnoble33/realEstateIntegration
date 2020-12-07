import { combineReducers } from "redux";
import homes from './home_reducer';

const rootReducer = combineReducers({
    homes,   
});

export default rootReducer