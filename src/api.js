const API_URL = import.meta.env.VITE_API_URL;

export const signup = async (userData) => {
    const response = await fetch(`${API_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });
    return response.json();
};

export const login = async (userData) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });

    const data = await response.json();
    if (data.token) {
        localStorage.setItem("token", data.token); // ✅ Store token
    }
    return data;
};

export const fetchTasks = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/tasks`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
};
