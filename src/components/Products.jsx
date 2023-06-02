import { getProductsAsync, deleteProductAsync} from "./actions/productsActions"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getProductToEdit } from "./reducers/productsReducer"

const Products = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)
  const loading = useSelector(state => state.products.loading)



   useEffect(() => {
     dispatch(getProductsAsync())
   }, [])

 if(loading) return "Cargando..."

  return (
    <>
      <h2 className="text-center my-5 "> Listado de productos</h2>

      <table className="table table-striped ">
          <thead className="bg-primary table-dark text-center">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-center">
            
              {products?.map(p => (
                <tr key={p.id}>
                  <td scope="col">{p.nombre ?? p.name}</td>
                  <td scope="col">{p.precio ?? p.price}</td>
                  <td scope="col">
                    <button className="btn btn-info mr-3" onClick={() => {
                      navigate(`products/edit/${p.id}`)
                      dispatch(getProductToEdit(p))
                    }}>Editar</button>
                    <button className="btn btn-danger" onClick={ () => dispatch(deleteProductAsync(p))}>Eliminar</button>
                  </td>
                </tr>
              ))}
          </tbody>
      </table>
    
    </>
  )
}

export default Products