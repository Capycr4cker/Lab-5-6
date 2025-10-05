// Cualquier caracter a-Z y A-Z, numeros 0-9 y _ antes del arroba, 
// luego lo mismo con punto, y al final caracters A-Z y a-Z minimo 2 maximo 3
//const regCorreo = /^[a-zA-Z.0-9_]+@([a-zA-Z-]+\.)+[A-Za-z]{2,3}$/;

//largo minimo 3 maximo 16
//const regNombre = /^[a-zA-Z\s]{3,16}$/;

// validacion telefono
// formato: 569-123456782134243242342342342342343453453453453453a
//const regTelefono = /^56[0-9]-[0-9]{8}$/;

const reglasValidacion = {
    name: {
        required: true,
        minLength: 3,
        maxLength: 20,
        //onlyLetters: true,
        message: {
            required: 'El nombre es obligatorio',
            minLength: 'El nombre debe tener al menos 3 carácteres',
            maxLength: 'El nombre no puede tener más de 20 carácteres',
            //onlyLetters: 'El nombre debe contener solo letras del abecedario'
        },
    },
    description: {
        required: true,
        message: {
            required: 'El campo "description" es obligatorio',
        },
    },
};

function revisarReglasName(valor: string): string[] {
    const reglas = reglasValidacion.name;

    const errores: string[] = [];

    const v = (valor || '').trim();

    if (reglas.required && v === '') {
        errores.push(reglas.message.required);
        return errores;
    }

    if (v === '') return errores;

    if (reglas.minLength && v.length < reglas.minLength) {
        errores.push(reglas.message.minLength);
    }
    if (reglas.maxLength && v.length > reglas.maxLength) {
        errores.push(reglas.message.maxLength);
    }


    return errores;
}

function revisarReglasDescription(valor: string): string[] {
  const reglas = reglasValidacion.description;
  const errores: string[] = [];
  const v = (valor || '').trim();

  if (reglas.required && v === '') {
    errores.push(reglas.message.required);
  }

  return errores;
}





export { revisarReglasName, reglasValidacion, revisarReglasDescription }