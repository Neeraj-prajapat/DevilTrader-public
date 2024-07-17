import React, {useState} from "react";

export default function Navbar() {

    const [isActive, setIsActive] = useState(false);
  
    const handleToggle = () => {
      setIsActive(!isActive);
    };


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-color py-5 pt-lg-5">
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            Devil Trader
          </a>
          <button
            className={`navbar-toggler ${isActive ? "active" : ""}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isActive ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#online-section">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
