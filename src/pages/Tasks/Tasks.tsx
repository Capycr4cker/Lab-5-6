import './Tasks.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Task {
    id: string;
    name: string;
    done: boolean;
}

const Tasks = () => {

    const [tasks, setTasks] = useState<Task[]>(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const toggleDone = (id: string) => {
        const newTasks = tasks.map(t => t.id === id ? { ...t, done: !t.done } : t);
        setTasks(newTasks);
    };

    const deleteTask = (id: string) => {
        const newTasks = tasks.filter(t => t.id !== id);
        setTasks(newTasks);
    };

    return (
        <>
            <h1>My tasks</h1>
            {/* {tasks.length === 0 && <p>No hay tareas todavía.</p>} */}

            <table>
                <thead>
                    <tr>
                        <th>ID Task</th>
                        <th>Name</th>
                        <th>Done</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.name}</td>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={task.done}
                                    onChange={() => toggleDone(task.id)}
                                />
                            </td>
                            <td>
                                <button onClick={() => deleteTask(task.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Link to="/"><button> Back </button></Link>
            <Link to="new"><button> New task </button></Link>
        </>
    );
};

export default Tasks;
