import React from 'react';
const Nav = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container-fluid">
    <a className="navbar-brand text-light" href="/"><i className="fab fa-uncharted text-info"></i> Software Solution</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="/">About Us</a>
                </li>
      </ul>
      <form className="d-flex">
        <button className="btn btn-outline-info text-light" type="submit">Contact Us</button>
      </form>
    </div>
  </div>
</nav>  
        </div>
    );
};

export default Nav; 