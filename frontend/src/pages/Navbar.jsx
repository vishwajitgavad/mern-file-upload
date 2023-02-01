import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (<>
    <nav className="navbar navbar-expand-lg bg-danger">
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="">Navbar</Link> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/multilmage">Multilmage</Link>
            <Link className="nav-link active" to="/formupload">FormUpload</Link>

          </div>
        </div>
      </div>
    </nav>
  </>
  )
}

export default Navbar