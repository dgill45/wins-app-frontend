import React, { useState } from "react";
import styles from "..styles/TaskItem.module.css";

const TaskItem = ({ task }) => {
    const [completed, setCompleted] = useState(task.completed);

    const handleComplete = async () => {
        try {
            // Mock API call (replace with real API logic later)
            setCompleted(true);
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    return (
        <div>
            <span style={{ textDecoration: completed ? "line-through" : "none" }}>
                {task.name}
            </span>
            {!completed && <button onClick={handleComplete}>Complete</button>}
            {completed && (
                <div>
                    <p>Notify your group!</p>
                    <button>Send Generic Message</button>
                    <button>Send Custom Message</button>
                </div>
            )}
        </div>
    );
};

export default TaskItem;
