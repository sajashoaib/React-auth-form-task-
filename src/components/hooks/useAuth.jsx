import { useReducer, useState } from "react"
import { ROLES } from "../../constants";
import { AUTH_ACTIONS, AUTH_API_PATHS } from "../../constants/auth";
import axios from "axios";
import { AUTH_API } from "../../config/api";



const initalState = {
    isAuth: localStorage.getItem('isAuth') || false,
    token: localStorage.getItem('token') || null,
    user: JSON.parse(localStorage.getItem('user'))|| null,
    // user: JSON.parse(localStorage.getItem('user')) || null,
    role: localStorage.getItem('role') || ROLES.GUEST,
    isLooading: false,
    error: null,
    data: [],
    users: []
};
const reduce = (state, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.SET_LOADING:
            return {
                ...state,
                isLooading: true
            };

        case AUTH_ACTIONS.AUTHORIZE:
            const token = action?.payload?.token || state?.token || localStorage.getItem('token');
            const role = action?.payload?.isAdmin ? ROLES.ADMIN : ROLES.USER
            localStorage.setItem('token', token);
            localStorage.setItem('role', role);
            localStorage.setItem('isAuth', true);
            // localStorage.setItem('user', JSON.stringify(action.payload.token));
            localStorage.setItem('user', JSON.stringify(action.payload))

            return {
                ...state,
                isAuth: true,
                token: token,
                user: action?.payload?.user,
                role: role,
                isLooading: false,
                error: null,
                data: action?.payload

            };

        case AUTH_ACTIONS.LOGOUT:
            ["token", "role", "user"].forEach(item => localStorage.removeItem(item));
            return {
                isAuth: false,
                token: null,
                user: null,
                role: ROLES.GUEST,
                isLooading: false,
                error: null,
                data: [],
                users: []
            };

        case AUTH_ACTIONS.SET_ERROR:
            return {
                ...state,
                error: action?.payload?.error,
                isLooading: false
            };

        default: {
            return state
        }
    }
}

const useAuth = () => {
    const [state, dispatch] = useReducer(reduce, initalState);
    const token = state.token || localStorage.getItem('token');
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [delet, setDeletUser] = useState(null);


    const config = {
        headers: {
            Authorization: `Bearer ${token}`


        }
    }


    const login = async (body) => {
        dispatch({ type: AUTH_ACTIONS.SET_LOADING });
        try {
            const { data } = await axios.post(AUTH_API + AUTH_API_PATHS.LOGIN, body);
            dispatch({ type: AUTH_ACTIONS.AUTHORIZE, payload: data?.data || data })
        } catch (error) {
            dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
        }
    };


    const signup = async (body) => {
        dispatch({ type: AUTH_ACTIONS.SET_LOADING });
        try {
            const { data } = await axios.post(AUTH_API + AUTH_API_PATHS.SIGNUP, body);
            dispatch({ type: AUTH_ACTIONS.AUTHORIZE, payload: data?.data || data })
        } catch (error) {
            dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
        }
    };

    const logout = () => {
        dispatch({ type: AUTH_ACTIONS.LOGOUT });
    };

    const getProfileData = async () => {
        dispatch({ type: AUTH_ACTIONS.SET_LOADING });
        try {
            const apiPath = state.role === ROLES.ADMIN ? AUTH_API_PATHS.ADMIN_PROFILE : AUTH_API_PATHS.USER_PROFILE;
            // const { data } = await axios.get(AUTH_API + AUTH_API_PATHS.PROFILE, config);
            const { data } = await axios.get(AUTH_API + apiPath, config);
            const actionType = state.role === ROLES.ADMIN ? AUTH_ACTIONS.AUTHORIZE : AUTH_ACTIONS.AUTHORIZE;
            // dispatch({ type: AUTH_ACTIONS.AUTHORIZE, payload: data  });
            dispatch({ type: actionType, payload: data?.data || data });

        } catch (error) {
            console.log(error);
            dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
        }

    }

    const listUsers = async () => {
        setIsLoading(true);

        // dispatch({ type: AUTH_ACTIONS.SET_LOADING });
        try {
            const res = await axios.get("https://react-tt-api.onrender.com/api/users",
                {
                    headers: { Authorization: `Bearer ${token}` }
                })

            // dispatch({ type: AUTH_ACTIONS.LIST_USERS, payload: { data } });
            setUsers(res.data.users);
            //         setIsLoading(false);
        } catch (error) {
            setError(error)
            // dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
        } finally {
            // dispatch({type:"SET_LOADING"});
            setIsLoading(false)
        }
    }


    const Delete = async (userId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (confirmDelete) {
            setDeletUser(userId);
            try {
                await axios.delete(AUTH_API + AUTH_API_PATHS.DELETE_USER + `${userId}`, config);
                setUsers(prevUsers => prevUsers.filter(user => user._id !== userId));
            } catch (error) {
                console.log(error);
            } finally {
                setDeletUser(null);
            }
        }
    };








    return {
        ...state,
        login,
        signup,
        getProfileData,
        listUsers,
        logout,
        users,
        error,
        isLoading,
        delet,
        Delete
    }


};
export default useAuth;


