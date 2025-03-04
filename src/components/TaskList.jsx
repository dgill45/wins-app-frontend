import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; // ✅ Use Vite environment variables

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/tasks`)
            .then((response) => setTasks(response.data))
            .catch((error) => console.error("Error fetching tasks:", error));
    }, []);

    const handleTaskAdded = (newTask) => {
        setTasks([...tasks, newTask]); // Update UI when a task is added
    };

    return (
        <div>
            <h1>Your Tasks</h1>
            {tasks.length > 0 ? (
                tasks.map((task) => <TaskItem key={task.id} task={task} />)
            ) : (
                <p>No tasks found.</p>
            )}
        </div>
    );
};

export default TaskList;
