import { ProductModalForm } from "../Components/Views/Products/ProductModalForm";
import { ProductList } from "../Components/Views/Products/ProductList";
import { useProducts } from "../hooks/useProducts";
import { useEffect } from "react";

export const ProductsPage = () => {

    const {
        products,
        productSelected,
        initialProductForm,
        visibleForm,
        handlerAddProduct,
        handlerRemoveProduct,
        handlerOpenForm,
        handlerCloseForm,
        getProducts,
    } = useProducts();


    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>

            {!visibleForm ||
                <ProductModalForm
                    productSelected={productSelected}
                    initialProductForm={initialProductForm}
                    handlerAddProduct={handlerAddProduct}
                    handlerCloseForm={handlerCloseForm}
                />}
            <div className="container my-4">
                <h2>Productos</h2>
                <div className="row">
                    <div className="col">
                        {visibleForm || <button
                            className="btn btn-primary my-2"
                            onClick={handlerOpenForm}>
                            Nuevo Producto
                        </button>}

                        {
                            products.length === 0
                                ? <div className="alert alert-warning">No hay productos en el sistema!</div>
                                : <ProductList
                                    handlerRemoveProduct={handlerRemoveProduct}
                                    products={products}
                                />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}