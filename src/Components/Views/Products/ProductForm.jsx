import { useEffect, useState } from "react"
import Swal from "sweetalert2";
import { useUsers } from "../../../hooks/useUsers";
import { findAll } from "../../../services/userService";


export const ProductForm = ({ productSelected, handlerAddProduct, initialProductForm, handlerCloseForm }) => {

    const [productForm, setProductForm] = useState(initialProductForm);
    const [users, setUsers] = useState([]);

    const { id, codigo, nombreProducto,caracteristicas, precio, empresa} = productForm;

    
    const getUsers = async () => {
        const result = await findAll();
        const data = result.data;
        console.log(data);
        setUsers(data);
    }

    useEffect(() => {
        getUsers();
    }, []);
    
    const onInputChange = ({ target }) => {
        const { name, value } = target;
 
        setProductForm({
            ...productForm,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!codigo || (!nombreProducto && id === 0) || !caracteristicas || !precio || !empresa) {
            Swal.fire(
                'Error de validacion',
                'Debe completar los campos del formulario!',
                'error'
            );

            return;
        }


        
        // console.log(productForm);

        // guardar el user form en el listado de usuarios
        handlerAddProduct(productForm);
        setProductForm(initialProductForm);
    }

    const onCloseForm = () => {
        handlerCloseForm();
        setProductForm(initialProductForm);
    }
    return (
        <form onSubmit={ onSubmit }>
            <input
                className="form-control my-3 w-75"
                placeholder="Codigo"
                name="codigo"
                value={codigo}
                onChange={onInputChange} />
            
            { id > 0 || <input
                className="form-control my-3 w-75"
                placeholder="Nombre del producto"
                type="nombreProducto"
                name="nombreProducto"
                value={nombreProducto}
                onChange={onInputChange} /> }
            
            <input
                className="form-control my-3 w-75"
                placeholder="Caracteristicas"
                name="caracteristicas"
                value={caracteristicas}
                onChange={onInputChange} />
            <input type="hidden"
                name="id"
                value={id} />

           <input
                className="form-control my-3 w-75"
                placeholder="Precio"
                name="precio"
                value={ precio}
                onChange={onInputChange} />

            <select
                className="form-select my-3 w-75"
                name="empresa"
                onChange={onInputChange}>
                <option value={1}>Seleccionar...</option>
                {users.map(({ nit,nombreEmpresa}) => (
                    <option key={nit} value={nit}>
                        {nombreEmpresa}
                    </option>
                ))}
            </select>





            
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