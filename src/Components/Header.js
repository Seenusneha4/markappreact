import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div classNameName="container">
    <div classNameName="row">
        <div classNameName="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div classNameName="row">
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" >Student App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Add Student</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/view">View student</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Header