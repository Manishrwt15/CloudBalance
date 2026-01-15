import {SET_SELECTED_ACCOUNT, SET_ACCOUNT} from '../actions/accountActions'

const initialState = {
    selectedAccount: null,
    accounts: []
}

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ACCOUNT:
      return {
        ...state,
        selectedAccount: action.payload
      };
    case SET_ACCOUNT:
      return {
        ...state,
        accounts: action.payload
      };
    default:
      return state;
  }
};

export default accountReducer;