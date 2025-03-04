const API_URL = import.meta.env.VITE_API_URL;

export const signup = async (userData) => {
    const response = await fetch(`${API_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });
    return response.json();
};
