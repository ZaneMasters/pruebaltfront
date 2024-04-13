import { UserRow } from "./UserRow"

export const UsersList = ({ handlerUserSelectedForm, handlerRemoveUser, users = [] }) => {

    return (
        <table className="table table-hover table-striped">

            <thead>
                <tr>
                    <th>NIT</th>
                    <th>Nombre Empresa</th>
                    <th>Direccion</th>
                    <th>Telefono</th>
                    <th>Actualizar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(({ nit, nombreEmpresa,direccion, telefono }) => (
                        <UserRow
                            key={nit}
                            nit={nit}
                            nombreEmpresa={nombreEmpresa}
                            direccion={direccion}
                            telefono={telefono}
                            handlerUserSelectedForm={handlerUserSelectedForm}
                            handlerRemoveUser={handlerRemoveUser} />
                    ))
                }
            </tbody>
        </table>
    )
}