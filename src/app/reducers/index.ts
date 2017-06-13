import { combineReducers } from '@ngrx/store';
import { InputFormReducer } from './input-form.reducer';

export default combineReducers({
  inputForm: InputFormReducer
})
