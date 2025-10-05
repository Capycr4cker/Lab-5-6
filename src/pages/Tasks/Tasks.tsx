import './Tasks.css';
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

export default Tasks;