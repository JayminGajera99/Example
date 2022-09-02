import {loginType, changeloginType, clickmeType} from './types';

const initialState = {
  uname: '',
  pwd: '',
  login: false,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginType.USERNAME:
      return {
        ...state,
        uname: action.payload,
      };
    case loginType.PASSWORD:
      return {
        ...state,
        pwd: action.payload,
      };
    case changeloginType.LOGIN_STATE:
      return {
        ...state,
        login: action.payload,
      };
    case clickmeType.PAWD:
      return {
        ...state,
        pwd: action.payload,
      };
    default:
      return state;
  }
};
export default dataReducer;
