const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky nav-sticky">
      <div className="container">
          <a className="logo" href="javascript:void(0)">Mike</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <i className="mdi mdi-menu"></i>
          </button>

          <div className="collapse navbar-collapse navigation" id="navbarCollapse">
              <ul id="navbar-navlist" className="navbar-nav ms-auto">
                  <li className="nav-item">
                      <a className="nav-link active" href="#home">Home</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#services">Services</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#resume">Resume</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#projects">Projects</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#news">Blog</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#contact">Contact</a>
                  </li>
                  <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages
                      </a>
                      <div className="dropdown-menu rounded m-0" aria-labelledby="navbarDropdown">
                          <div className="container ms-0 ms-md-0">
                              <div className="row">
                                  <div className="col-md-12">
                                      <a className="dropdown-item" href="page-blog.html">Blog</a>
                                      <a className="dropdown-item" href="page-blog-detail.html">Blog Detail</a>
                                      <a className="dropdown-item" href="page-portfolio.html">Portfolio</a>
                                      <a className="dropdown-item" href="page-portfolio-detail.html">Portfolio Detail</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </li>
              </ul>

              <ul className="top-right text-end list-unstyled list-inline mb-0 mt-2 mt-sm-0 nav-social">
                  <li className="list-inline-item me-2"><a href="javascript:void(0)"><i className="mdi mdi-facebook"></i></a></li>
                  <li className="list-inline-item me-2"><a href="javascript:void(0)"><i className="mdi mdi-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="javascript:void(0)"><i className="mdi mdi-instagram"></i></a></li>
              </ul>
              
          </div> 
      </div>
    </nav>
  );
};

export default Header;
