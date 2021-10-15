import axios from 'axios';
import { apiUrl } from '../config.json';
import jwtDecode from 'jwt-decode';

export async function login(email, password) {
    const { data } = await axios.post(apiUrl + "/auth", { email, password });
    localStorage.setItem('token', data.token);
}

export function logout(email, password) {
    localStorage.removeItem('token');
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem("token");
        return jwtDecode(jwt);
    }
    catch (err) {
        return null;
    }
}

export default {
    login,
    logout,
    getCurrentUser
}