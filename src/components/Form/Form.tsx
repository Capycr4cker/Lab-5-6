import './Form.css';
import type React from "react";
import { useState } from "react";
import { revisarReglasName } from "../../utils/validations/validations";


interface FormProps {
    onSubmit?: (nombre: string) => void;
}


const Form = ({ onSubmit }: FormProps) => {
    const [formulario, setFormulario] = useState({
        name: "",
        description: "",
    });

    const [errorsName, setErrorsName] = useState<string[]>([]);
    const [errorsDescription, setErrorsDescription] = useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormulario({ ...formulario, [name]: value });

        if (name === 'name' && errorsName.length > 0) {
            setErrorsName([]);
        }
        if (name === 'description' && errorsDescription.length > 0)
            setErrorsDescription([]);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const errorsName = revisarReglasName(formulario.name);

        setErrorsName(errorsName);

        if (errorsName.length > 0 ) return;

        if (onSubmit) onSubmit(formulario.name.trim());
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formulario.name}
                        onChange={handleChange}
                    />

                </div>

                <div>
                    <label htmlFor="description">Description: </label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        value={formulario.description}
                        onChange={handleChange}
                    />

                </div>
                <div className="errors">
                    {errorsName.length > 0 && (
                        <div className="name error">
                            <ul>
                                {errorsName.map((err, i) => (
                                    <li key={i}>{err}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {errorsDescription.length > 0 && (
                        <div className="description error">
                            <ul>
                                {errorsDescription.map((err, i) => (
                                    <li key={i}>{err}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Form;
