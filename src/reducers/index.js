import * as actions from '../actions';

const initialState = {
  counter: 42
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT_COUNTER:
      return {
        counter: state.counter + 1
      }
    
    case actions.DECREMENT_COUNTER:
      return {
        counter: state.counter - 1
      }
  
    default:
      return state;
  }
}