import { Link } from 'react-router-dom'
import './nav.css'
function Navbar() {
  return (
    <nav className="navbar" style={{ background: "#080f21" }}>

      <Link to="/" className="logo">
        Zuse<span>Log</span>
      </Link>

      <ul className="nav_links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/services">Services</Link>
        </li>

        <li>
          <Link to="/articles">Articles</Link>
        </li>

        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>

      <Link to="/contact" className="started">
        Get Started
      </Link>

    </nav>
  )
}

export default Navbar