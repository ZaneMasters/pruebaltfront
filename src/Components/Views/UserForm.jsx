import { useEffect, useState } from "react"
import Swal from "sweetalert2";

export const UserForm = ({ userSelected, handlerAddUser, initialUserForm, handlerCloseForm }) => {

    const [userForm, setUserForm] = useState(initialUserForm);

    const { id, nit, nombreEmpresa,direccion, telefono } = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
        });
    }, [userSelected]);

    const onInputChange = ({ target }) => {
        // console.log(target.value)
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!nit || !nombreEmpresa  || !direccion || !telefono) {
            Swal.fire(
                'Error de validacion',
                'Debe completar los campos del formulario!',
                'error'
            );
            return;
        }
        const regex = /^[0-9]*$/; // Expresión regular que permite solo números
            if (!regex.test(nit)) {
                Swal.fire(
                    'Error de validacion',
                    'El NIT debe contener solo numeros!',
                    'error'
                );

                return;
            }
        
        // console.log(userForm);

        // guardar el user form en el listado de usuarios
        handlerAddUser(userForm);
        setUserForm(initialUserForm);
    }

    const onCloseForm = () => {
        handlerCloseForm();
        setUserForm(initialUserForm);
    }
    return (
        <form onSubmit={ onSubmit }>
            { id > 0 ||<input
                className="form-control my-3 w-75"
                placeholder="nit"
                name="nit"
                value={ nit}
                onChange={onInputChange} />}
            
            <input
                className="form-control my-3 w-75"
                placeholder="Nombre Empresa"
                type="nombreEmpresa"
                name="nombreEmpresa"
                value={nombreEmpresa}
                onChange={onInputChange} /> 
            
            <input
                className="form-control my-3 w-75"
                placeholder="Direccion"
                name="direccion"
                value={direccion}
                onChange={onInputChange} />
            <input type="hidden"
                name="id"
                value={id} />

           <input
                className="form-control my-3 w-75"
                placeholder="Telefono"
                name="telefono"
                value={ telefono}
                onChange={onInputChange} />
            
            <button
                className="btn btn-primary"
                type="submit">
                {id > 0 ? 'Editar' : 'Crear'}
            </button>
            <button
                className="btn btn-primary mx-2"
                type="button"
                onClick={() => onCloseForm()}>
                Cerrar
            </button>
        </form>
    )
}