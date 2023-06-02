import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"

import { addProductAsync } from "./actions/productsActions"
import { showMsg } from "./reducers/alertReducer"


const AddProduct = () => {

  const [product, setProduct] = useState({ name: "", price: 0 })

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const loading = useSelector(state => state.products.loading)
  const error = useSelector(state => state.products.error)


  function handleSubmit (e) {
    e.preventDefault()

    if (!Object.values(product).some(p => p === "" || p === 0)) {
      dispatch(addProductAsync(product))
      setTimeout(() => {
        navigate("/")
      }, 2000);
     
    }
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card mt-5">
          <div className="card-body">
            <h2 className="text-center font-weight-bold">Agregar nuevo Producto</h2>

            <form
              onSubmit={handleSubmit}
            >
    
              <div className="form-group">
                <label >Nombre Producto</label>
                <input type="text" className="form-control" placeholder="Nombre Producto" name="name" onChange={e => setProduct({
                  ...product,
                  [e.target.name]: e.target.value
                })} />
              </div>

              <div className="form-group">
                <label>Precio Producto</label>
                <input type="number" className="form-control" placeholder="Precio Producto" name="price" onChange={e => setProduct({
                  ...product,
                  [e.target.name]: e.target.value
                })} />
              </div>

              <button type="submit" className="btn btn-primary font-weight-bold d-block w-100">{loading ? "Cargando..." : "Agregar Producto"}</button>
              {error && <p className="text-center mt-2 font-weight-bold alert alert-danger">Ha ocurrido un error</p>}
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct