
export const ProductRow = ({handlerRemoveProduct,id ,codigo, nombreProducto,caracteristicas, precio, empresa}) => {
    
    return (
        <tr>
            <td>{id}</td>
            <td>{codigo}</td>
            <td>{nombreProducto}</td>
            <td>{caracteristicas}</td>
            <td>{precio}</td>
            <td>{empresa.nombreEmpresa}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handlerRemoveProduct(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}