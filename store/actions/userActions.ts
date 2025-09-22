import axios from "axios";
import Cookies from "js-cookie";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  LOGIN_REQUEST,
  GET_USER_REQUEST,
  UPDATE_USER_REQUEST,
} from "../constants/authConstants";
import { toast } from "sonner";
import { AppDispatch } from "../store";

const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const loginWithGoogle = (credential: any) => async (dispatch: any) => {
  try {
    dispatch({type:LOGIN_REQUEST});

    const res = await axios.post(`${backendURL}/api/auth/google`, {
      credential: credential,
    });
    const data = res.data;
    if (data.success) {
      Cookies.set("token", data?.token, { expires: 7, sameSite: "Lax" });

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token: data.token,
        },
      });

      dispatch(fetchUser());
      toast.success("Logged in successfull");
    } else {
      dispatch({
        type: LOGIN_FAIL,
        payload: "Login failed",
      });
    }
  } catch (err: any) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response?.data?.message || err.message,
    });
  }
};

export const fetchUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({type:GET_USER_REQUEST});

    const token = Cookies.get("token");
    if (!token) return;

    const res = await axios.get(`${backendURL}/api/auth/getUser`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = res.data;

    if (data.success) {
      dispatch({
        type: GET_USER_SUCCESS,
        payload: res.data.user,
      });
    } else {
      dispatch({
        type: GET_USER_FAIL,
        payload: "Failed to fetch user",
      });
    }
  } catch (error: any) {
    dispatch({
      type: GET_USER_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

export const updateUser = (formData : any)=> async (dispatch : AppDispatch) =>{
  try {
    dispatch({type:UPDATE_USER_REQUEST});

    const token = Cookies.get("token");
    if (!token) return;

    const res = await axios.put(
        `${backendURL}/api/auth/updateUser`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    const data = res.data;
    if(data.success){
      dispatch({
        type:UPDATE_USER_SUCCESS,
        payload:data.user
      });
      toast.success("Profile updated successfully")
    }else{
      dispatch({
        type:UPDATE_USER_FAIL,
        payload: "Failed to update user"
      })
    }
  } catch (error : any) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
}