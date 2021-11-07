import { combineReducers } from 'redux';
import dashboard from '../modules/components/Dashboard/reducer';

const rootReducer = combineReducers({
    dashboard: dashboard
});

export default rootReducer;
