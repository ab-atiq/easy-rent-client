import axios from "axios";
import { registerFailure, registerStart, registerSuccess } from "./userReducer";
import { loginFailure, loginStart, loginSuccess } from "./loginReducer";

export const register = async (dispatch, user) => {
    dispatch(registerStart());

    try {
        const response = await axios.post('https://guarded-taiga-13015.herokuapp.com/api/auth/register', user);
        dispatch(registerSuccess(response.data));

    }
    catch (err) {
        dispatch(registerFailure());
    }
}



export const login = async (dispatch, login) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('https://guarded-taiga-13015.herokuapp.com/api/auth/login', login);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};