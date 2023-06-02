import { editProductAsync } from "./actions/productsActions"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const EditProduct = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const productToEdit = useSelector(state => state.products.productToAction)

  const [product, setProduct] = useState({
    name: productToEdit?.name ,
    price: productToEdit?.price ,
    id: productToEdit?.id
  })
  
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(editProductAsync(product))

    setTimeout(() => {
      navigate("/")
    },1500)
  }

  return (
    <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="text-center font-weight-bold">Editar Producto</h2>

          <form
            onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label >Nombre Producto</label>
                <input type="text" className="form-control" placeholder="Nombre Producto" name="name" value={product.name} onChange={e => setProduct({
                  ...product,
                  [e.target.name] : e.target.value
                })} />
              </div>

              <div className="form-group">
                <label>Precio Producto</label>
                <input type="number" className="form-control" placeholder="Precio Producto" name="price" value={product.price} onChange={e => setProduct({
                  ...product,
                  [e.target.name] : e.target.value
                })} />
              </div>
              
              <button type="submit" className="btn btn-primary font-weight-bold d-block w-100"
              >Guardar Cambios</button>
          </form>
        </div>
      </div>
    </div>
   </div>
  )
}

export default EditProduct