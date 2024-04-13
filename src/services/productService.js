import axios from "axios"

const BASE_URL = 'http://ec2-18-117-141-255.us-east-2.compute.amazonaws.com:8080/productos';

export const findAllProducts = async() => {
    try {
        const response = await axios.get(BASE_URL);
        return response;
    } catch (error) {
        console.error(error);
    }
    return null;
}

export const save = async ({ codigo, nombreProducto,caracteristicas, precio, empresa }) => {
    try {
        return await axios.post(BASE_URL, {
            codigo,
            nombreProducto,
            caracteristicas,
            precio,
            empresa: {
                nit: empresa
            }
        });
    } catch (error) {
        console.error(error);
    }
    return undefined;
}

export const remove = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.error(error);
    }
}