import {changeloginType, loginType, clickmeType} from './types';

export function changeUsername(data) {
  console.log('changeUsername called', data);
  return {
    type: loginType.USERNAME,
    payload: data,
  };
}

export function changePassword(data) {
  return {
    type: loginType.PASSWORD,
    payload: data,
  };
}

export function changeLogin(data) {
  return {
    type: changeloginType.LOGIN_STATE,
    payload: data,
  };
}

export function homePassword(data) {
  return {
    type: clickmeType.PAWD,
    payload: data,
  };
}
