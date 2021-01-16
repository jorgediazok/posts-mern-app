import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, history) => async (dispatch) => {
  try {
    //Signin the user
    const { data } = await api.signIn(formData);
    dispatch({
      type: AUTH,
      data,
    });
    history.push('/');
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    //Signup the user
    const { data } = await api.signUp(formData);
    dispatch({
      type: AUTH,
      data,
    });
    history.push('/');
  } catch (error) {
    console.log(error.message);
  }
};
