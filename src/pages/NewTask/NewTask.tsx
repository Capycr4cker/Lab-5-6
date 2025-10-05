import './NewTask.css';
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

export default NewTask;