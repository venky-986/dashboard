import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user') || null));

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);

    const login = async(inputs) => {
        const res = await axios.post('/auth/login', inputs);
        setCurrentUser(res.data)
        // navigate('/');
    }

    const logout = async(inputs) => {
        const res = await axios.post('/auth/logout', inputs);
        setCurrentUser(null);
    }

    const register = async(inputs) => {
        const res = await axios.post('/auth/register', inputs);
        setCurrentUser(res.data);
    }

    return (
        <AuthContext.Provider value={{currentUser, register, login, logout}}>{children}</AuthContext.Provider>
    )
};