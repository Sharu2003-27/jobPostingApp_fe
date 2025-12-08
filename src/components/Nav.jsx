import { Link } from "react-router-dom"
import "./Nav.css"

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary nav-large-padding">
        <div className="container-fluid" style={{ "--bs-gutter-x": "0" }}>
          <Link to="/home" className="navbar-brand">Intern House</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/jobPosting">Job Postings</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addJobPost">Post a Job</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
