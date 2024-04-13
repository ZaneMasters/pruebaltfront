import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../Components/Views/layout/Navbar"
import { useUsers } from "../hooks/useUsers"
import { UsersPage } from "../pages/UsersPage"
import { ProductsPage } from "../pages/ProductsPage"
import { useProducts } from "../hooks/useProducts"

export const UserRoutes = ({ login, handlerLogout }) => {

    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
    } = useUsers();

    const {
        products,
        productSelected,
        initialProductForm,
        handlerAddProduct,
        handlerRemoveProduct,
        handlerProductSelectedForm,
    } = useProducts();


    return (
        <>
            <Navbar login={login} handlerLogout={handlerLogout} />
            <Routes>
                <Route path="users" element={<UsersPage
                    users={users}
                    userSelected={userSelected}
                    initialUserForm={initialUserForm}
                    visibleForm={visibleForm}
                    handlerAddUser={handlerAddUser}
                    handlerRemoveUser={handlerRemoveUser}
                    handlerUserSelectedForm={handlerUserSelectedForm}
                    handlerOpenForm={handlerOpenForm}
                    handlerCloseForm={handlerCloseForm}
                />} />

                <Route path="products" element={<ProductsPage
                    products={products}
                    productSelected={productSelected}
                    initialProductForm={initialProductForm}
                    visibleForm={visibleForm}
                    handlerAddProduct={handlerAddProduct}
                    handlerRemoveProduct={handlerRemoveProduct}
                    handlerProductSelectedForm={handlerProductSelectedForm}
                    handlerOpenForm={handlerOpenForm}
                    handlerCloseForm={handlerCloseForm}
                />} />

                
                <Route path="/" element={<Navigate to="/users" />} />
            </Routes>
        </>
    )
}