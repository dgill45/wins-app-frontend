import { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { signup } from "../api";

const Signup = () => {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState(null);
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        
        try {
            const data = await signup(form);
            if (data.user) {
                setUser(data);
                localStorage.setItem("token", data.token);
                navigate("/tasks");
            } else {
                setError("Signup failed. Try again.");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;