import { useReducer, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { usersReducer } from "../reducers/usersReducer";
import { findAll,  remove, save, update } from "../services/userService";

const initialUsers = [];

const initialUserForm = {
    id:0,
    nit: '',
    nombreEmpresa: '',
    direccion: '',
    telefono: '',
}

export const useUsers = () => {
    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    const [userSelected, setUserSelected] = useState(initialUserForm);
    const [visibleForm, setVisibleForm] = useState(false);

    const navigate = useNavigate();

    const getUsers = async () => {
        const result = await findAll();
        console.log(result);
        dispatch({
            type: 'loadingUsers',
            payload: result.data,
        });
    }

    const handlerAddUser = async(user) => {

        let response;

        if (user.id === 0) {
            response = await save(user);
        } else {
            response = await update(user);
        }

        dispatch({
            type: (user.id === 0) ? 'addUser' : 'updateUser',
            payload: response.data,
        });

        Swal.fire(
            (user.id === 0) ?
                'Empresa Registrada' :
                'Empresa Actualizada',
            (user.id === 0) ?
                'La empresa ha sido registrada con exito!' :
                'La empresa ha sido actualizado con exito!',
            'success'
        );
        handlerCloseForm();
        navigate('/users');
       
    }

    const handlerRemoveUser = (nit) => {
        // console.log(id);

        Swal.fire({
            title: 'Esta seguro que desea eliminar?',
            text: "Cuidado la empresa sera eliminado!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                remove(nit);
                dispatch({
                    type: 'removeUser',
                    payload: nit,
                });
                Swal.fire(
                    'Empresa Eliminado!',
                    'La empresa ha sido eliminado con exito!',
                    'success'
                )
            }
        })

    }

    const handlerUserSelectedForm = (user) => {
        // console.log(user)
        setVisibleForm(true);
        setUserSelected({ ...user });
    }

    const handlerOpenForm = () => {
        setVisibleForm(true);
    }

    const handlerCloseForm = () => {
        setVisibleForm(false);
        setUserSelected(initialUserForm);
    }
    return {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
        getUsers,
    }
}