/*import './NewTask.css';
import Form from '../../components/Form/Form';
import { Link } from 'react-router-dom';


const NewTask = () => {

    return (
        <>
            <h1> Formulario</h1>
            <Form />
            <Link to="/tasks">
                <button> Back </button>
            </Link>
            <Link to="/">
                <button> Home </button>
            </Link>
        </>
    )
}

export default NewTask;*/

import './NewTask.css';
import Form from '../../components/Form/Form';
import { Link } from 'react-router-dom';

const NewTask = () => {
    const handleFormSubmit = (nombre: string) => {
        const savedTasks = localStorage.getItem('tasks');
        const tasks = savedTasks ? JSON.parse(savedTasks) : [];

        const newTask = {
        id: Date.now().toString(),
        title: nombre,
        done: false,
        };

        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        window.location.href = '/tasks';
    };

    return (
        <>
        <h1>Formulario</h1>
        <Form onSubmit={handleFormSubmit} />
        <Link to="/tasks"><button> Back </button></Link>
        <Link to="/"><button> Home </button></Link>
        </>
    );
};

export default NewTask;
