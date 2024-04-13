import { ProductRow } from "./ProductRow"

export const ProductList = ({  handlerRemoveProduct, products = [] }) => {

    return (
        <table className="table table-hover table-striped">

            <thead>
                <tr>
                    <th>#</th>
                    <th>Codigo</th>
                    <th>Nombre del Producto</th>
                    <th>Caracteristicas</th>
                    <th>Precio</th>
                    <th>Empresa</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {
                 products.map(({id, codigo, nombreProducto,caracteristicas, precio, empresa }) => (
                        <ProductRow
                            key={id}
                            id={id}
                            codigo={codigo}
                            nombreProducto={nombreProducto}
                            caracteristicas={caracteristicas}
                            precio={precio}
                            empresa={empresa}
                            handlerRemoveProduct={handlerRemoveProduct} />
                    ))
                }
            </tbody>
        </table>
    )
}