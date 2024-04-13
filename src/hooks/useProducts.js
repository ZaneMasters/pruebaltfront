import { useReducer, useState } from "react";
import Swal from "sweetalert2";
import { productsReducer } from "../reducers/productsReducer";
import { findAllProducts, remove,save } from "../services/productService";

const initialProduct = [];

const initialProductForm = {
        id:0,
        codigo: '',
        nombreProducto: '',
        caracteristicas: '',
        precio: '',
        empresa: '',
}

export const useProducts = () => {
    const [products, dispatch] = useReducer(productsReducer, initialProduct);
    const [productSelected, setProductSelected] = useState(initialProductForm);
    const [visibleForm, setVisibleForm] = useState(false);


    const getProducts = async () => {
        const result = await findAllProducts();
        console.log(result);
        dispatch({
            type: 'loadingProducts',
            payload: result.data,
        });
    }

 


    const handlerAddProduct = async(product) => {
        // console.log(product);

        let response;

        if (product.id === 0) {
            response = await save(product);
        } else {
            response = await update(product);
        }

        dispatch({
            type: (product.id === 0) ? 'addProduct' : 'updateProduct',
            payload:  response.data,
        });

        Swal.fire(
            (product.id === 0) ?
                'Producto Registrado' :
                'Producto Actualizado',
            (product.id === 0) ?
                'El Producto ha sido registrado con exito!' :
                'El Producto ha sido actualizado con exito!',
            'success'
        );
        handlerCloseForm();
    }

    const handlerRemoveProduct = (id) => {
         console.log(id);

        Swal.fire({
            title: 'Esta seguro que desea eliminar?',
            text: "Cuidado el producto sera eliminado!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                remove(id);
                dispatch({
                    type: 'removeProduct',
                    payload: id,
                });
                Swal.fire(
                    'Producto Eliminado!',
                    'El Producto ha sido eliminado con exito!',
                    'success'
                )
            }
        })

    }

    const handlerProductSelectedForm = (product) => {
        // console.log(product)
        setVisibleForm(true);
        setProductSelected({ ...product });
    }

    const handlerOpenForm = () => {
        setVisibleForm(true);
    }

    const handlerCloseForm = () => {
        setVisibleForm(false);
        setProductSelected(initialProductForm);
    }
    return {
        products,
        productSelected,
        initialProductForm,
        visibleForm,
        handlerAddProduct,
        handlerRemoveProduct,
        handlerProductSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
        getProducts
    }
}