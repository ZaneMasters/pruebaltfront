
export const UserRow = ({handlerUserSelectedForm, handlerRemoveUser,nit,nombreEmpresa, direccion, telefono}) => {
    
    return (
        <tr>
            <td>{nit}</td>
            <td>{nombreEmpresa}</td>
            <td>{direccion}</td>
            <td>{telefono}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handlerUserSelectedForm({
                        id:1,
                        nit,
                        nombreEmpresa,
                        direccion,
                        telefono
                    })}
                >
                    Actualizar
                </button>
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handlerRemoveUser(nit)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}