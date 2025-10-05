import './HomePage.css';
import { Link } from 'react-router-dom';



const HomePage = () => {

    return (
        <>
            <main>
                <h1> Welcome to My Tasks </h1>
                < Link to="/tasks">
                    <button> My tasks</button>
                </Link>
                <Link to="/tasks/new">
                    <button> Create New Task </button>
                </Link>
            </main>

        </>
    )
}

export default HomePage;