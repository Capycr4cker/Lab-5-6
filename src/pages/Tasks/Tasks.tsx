/*import './Tasks.css';
import { Link } from 'react-router-dom';

const Tasks = () => {

    return (
        <>
            <h1> My tasks</h1>
            <table>
                <thead>
                    <th>ID Tarea</th>
                    <th>Nombre Tarea</th>
                    <th>Done</th>


                </thead>
                <tbody>
                    <tr>
                        <td>Gandalf</td>
                        <td>Ian McKellen</td>
                        <td><img src="/check.png" alt="check-icon" aria-label='check-icon' width={'20'} /></td>

                    </tr>
                    <tr>
                        <td>Frodo Bolsón</td>
                        <td>Elijah Wood</td>
                        <td><img src="/cross.png" alt="cross-icon" aria-label='cross-icon' width={'20'} /></td>

                    </tr>
                    <tr>
                        <td>Galadriel</td>
                        <td>Cate Blanchett</td>
                    </tr>
                </tbody>
            </table>
            <Link to={"/"}>
                <button> Back </button>
            </Link>
            <Link to={"new"}>
                <button> New task </button>
            </Link>



        </>
    )
}

export default Tasks;*/

import './Tasks.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Task {
    id: string;
    title: string;
    done: boolean;
}

const Tasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) setTasks(JSON.parse(savedTasks));
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const toggleDone = (index: number) => {
        const newTasks = [...tasks];
        newTasks[index].done = !newTasks[index].done;
        setTasks(newTasks);
    };

    const deleteTask = (index: number) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <>
        <h1>My tasks</h1>
        {tasks.length === 0 && <p>No hay tareas todavía.</p>}

        <table>
            <thead>
            <tr>
                <   th>ID Tarea</th>
                <th>Nombre Tarea</th>
                <th>Done</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {tasks.map((task, i) => (
                <tr key={i}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>
                    <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleDone(i)}
                    />
                </td>
                <td>
                    <button onClick={() => deleteTask(i)}>Eliminar</button>
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
