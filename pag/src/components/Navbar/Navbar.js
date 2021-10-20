import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = () => {

  return (<div className="navbar">
    <Link to={'/home'}><h4 className="navbar-element">Ingresá</h4></Link>
    <Link to={'/profile'}><h4 className="navbar-element">Registrate</h4></Link>
    <Link to={'/courses'}><h4 className="navbar-element">Mis Compras</h4></Link>
  </div>)
}

export default Navbar;
