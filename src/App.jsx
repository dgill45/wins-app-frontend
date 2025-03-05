import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "./AuthContext";
import TaskList from "./components/TaskList";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
    const { user } = useContext(AuthContext);

    return (
        <AuthProvider>
            <Router>
                <nav>
                    <a href="/">Home</a>
                    {!user ? (
                        <>
                            <a href="/login">Login</a>
                            <a href="/signup">Signup</a>
                        </>
                    ) : (
                        <a href="/tasks">Tasks</a>
                    )}
                </nav>

                <Routes>
                    <Route path="/" element={<h1>Welcome to the Task App</h1>} />
                    <Route path="/login" element={user ? <Navigate to="/tasks" /> : <Login />} />
                    <Route path="/signup" element={user ? <Navigate to="/tasks" /> : <Signup />} />
                    <Route path="/tasks" element={user ? <TaskList /> : <Navigate to="/login" />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
