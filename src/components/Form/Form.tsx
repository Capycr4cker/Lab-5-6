import './Form.css';
import type React from "react";
import { useState } from "react";
import { regCorreo, regNombre, regTelefono } from "../../utils/validations/expressions";


interface FormProps {
    onSubmit?: (nombre: string) => void;
}

const Form = ({ onSubmit }: FormProps) => {
    const [formulario, setFormulario] = useState({
        nombre: "",
        mail: "",
        mensaje: "",
        telefono: "",
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let errorFormulario = false;

        if (!regNombre.test(formulario.nombre)) {
            errorFormulario = true;
            console.log("error en nombre")
        }

        if (!regCorreo.test(formulario.mail)) {
            errorFormulario = true;
            console.log("error en mail")
        }

        if (!regTelefono.test(formulario.telefono)) {
            errorFormulario = true;
            console.log("error en telefono")
        }

        if (errorFormulario) {
            console.error("error en formulario")
        } else {
            console.log("formulario enviado")
            // Si se pasa la función por props, la ejecutamos con el nombre
            if (onSubmit) {
                onSubmit(formulario.nombre);
            }
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormulario({ ...formulario, [name]: value });
    }

    return (
        <>
            <h1>Mi Formulario {formulario.nombre}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre" value={formulario.nombre} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="mail">Mail</label>
                    <input type="text" name="mail" id="mail" value={formulario.mail} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="mensaje">Mensaje</label>
                    <input type="text" name="mensaje" id="mensaje" value={formulario.mensaje} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="telefono">Telefono</label>
                    <input type="text" name="telefono" id="telefono" value={formulario.telefono} onChange={handleChange} />
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </>
    )
}

export default Form;
