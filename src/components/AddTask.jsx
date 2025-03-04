import React, { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; // ✅ Use Vite environment variables

const AddTask = ({ onTaskAdded }) => {
    const [taskName, setTaskName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}/tasks`, { name: taskName })
            .then((response) => {
                onTaskAdded(response.data);
                setTaskName("");
            })
            .catch((error) => console.error("Error adding task:", error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a task"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                required
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTask;
