import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, history) => async (dispatch) => {
  try {
    //Signin the user
    history.push('/');
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    //Signup the user
    history.push('/');
  } catch (error) {
    console.log(error.message);
  }
};
