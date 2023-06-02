import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"



const Layout = () => {


  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
        <div className="container">
          <Link to={"/"}><h1>Redux</h1> </Link>
        </div>

        <Link className="btn btn-danger d-block " to={"/products/new"}
          
        >Agregar producto</Link>
    </nav>
    
    <Outlet />
    </>
  )
}

export default Layout