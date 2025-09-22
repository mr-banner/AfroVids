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

interface Subscription {
  plan: "basic" | "pro" | "premium" | "free";
  status: "active" | "inactive";
  videoLimit: number;
}

interface UserData {
  _id?: string;
  email: string;
  name: string;
  avatar: string;
  bio?: string;
  location?: string;
  phone?: string;
  subscription?: Subscription;
  createdAt?: string;
  updatedAt?: string;
}

interface AuthState {
  loading: boolean;
  data: UserData | null;
  token: string | null;
  error: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  loading: false,
  data: null,
  token: null,
  error: null,
  isAuthenticated: false,
};

export const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        loading:false,
        error: null,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        token: null,
        data: null,
        isAuthenticated: false,
        error: action.payload,
      };

    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isAuthenticated: true,
        loading:false,
        error: null,
      };

    case GET_USER_FAIL:
      return {
        ...state,
        data: null,
        error: action.payload,
      };

    case UPDATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case UPDATE_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
