import axios from "axios"

const BASE_URL = 'http://ec2-18-117-141-255.us-east-2.compute.amazonaws.com:8080/empresas';

export const findAll = async() => {
    try {
        const response = await axios.get(BASE_URL);
        return response;
    } catch (error) {
        console.error(error);
    }
    return null;
}

export const save = async ({ nit, nombreEmpresa,direccion, telefono }) => {
    try {
        return await axios.post(BASE_URL, {
            nit,
            nombreEmpresa,
            direccion,
            telefono
        });
    } catch (error) {
        console.error(error);
    }
    return undefined;
}

export const update = async({ nit, nombreEmpresa,direccion, telefono }) => {
    try {
        return await axios.put(`${BASE_URL}/${nit}`, {
            nit,
            nombreEmpresa,
            direccion,
            telefono
        });
    } catch (error) {
        console.error(error);
    }
    return undefined;
}

export const remove = async (nit) => {
    try {
        await axios.delete(`${BASE_URL}/${nit}`);
    } catch (error) {
        console.error(error);
    }
}