import './NewTask.css';
import Form from '../../components/Form/Form';
import { Link, useNavigate } from 'react-router-dom';

const NewTask = () => {
    const navigate = useNavigate();
    const handleFormSubmit = (data: { name: string; description: string }) => {
        const savedTasks = localStorage.getItem('tasks');
        const tasks = savedTasks ? JSON.parse(savedTasks) : [];


        const newTask = {
            id: crypto.randomUUID(),
            name: data.name.trim(),
            description: data.description.trim(),
            done: false,
        };
        if (!newTask.name) {
            alert("El nombre es obligatorio");
            return;
        }

        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        console.log('Se está guardando:', newTask);

        navigate('/tasks');
    };

    return (
        <>
            <h1>Form</h1>
            <Form onSubmit={handleFormSubmit} />
            <div className="task-buttons">
            <Link to="/tasks"><button> Back </button></Link>
            <Link to="/"><button> Home </button></Link>
            </div>
        </>
    );
};

export default NewTask;
