import axios from "axios";
import { commonRequest } from "../../requestMethods";
import { registerFailure, registerStart, registerSuccess } from "./userReducer";

export const register = async (dispatch, user) => {
    dispatch(registerStart());

    try {
        const response = await axios.post('http://localhost:5000/api/auth/register', user);
        dispatch(registerSuccess(response.data));

    }
    catch (err) {
        dispatch(registerFailure());
    }
}

