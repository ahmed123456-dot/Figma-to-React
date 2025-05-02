import { useContext } from 'react';
import '../Header/Header.css';
import { CartData } from '../../../cartcontext';

export const Header = () => {
  const Cart = useContext(CartData);

  return (
    <div className="container-fluid w-100">
      <nav className="navbar navbar-expand-lg bg-light" style={{ padding: '20px' }}>
        <div className="container-fluid">
          <h2 className="text-start me-5">Exclusive</h2>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link me-4" href="/" style={{ fontSize: '18px' }}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-4" href="Products" style={{ fontSize: '18px' }}>
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-4" href="Details" style={{ fontSize: '18px' }}>
                  Details
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-4" href="/Cart" style={{ fontSize: '18px' }}>
                  Carts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-4" href="/Contact" style={{ fontSize: '18px' }}>
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-4" href="#" style={{ fontSize: '18px' }}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-4" href="/Signup" style={{ fontSize: '18px' }}>
                  Signup
                </a>
              </li>
            </ul>

            <form className="d-flex me-4" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <i className="fa-solid fa-magnifying-glass my-2" style={{ fontSize: '20px' }}></i>
            </form>

            {/* Cart Icon with Count Badge */}
            <div className="d-flex my-2 position-relative">
              <i className="fa-solid fa-cart-shopping my-2" style={{ fontSize: '20px' }}></i>
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: '10px' }}
              >
                {Cart.length}
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
