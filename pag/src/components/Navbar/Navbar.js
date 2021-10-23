import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = () => {


  return (<div className="navbar">
  <Link to={'/profile'}><h4 className="navbar-element">Ingresá</h4></Link>
  <Link to={'/register'}><h4 className="navbar-element">Registrate</h4></Link>
  <Link to={'/courses'}><h4 className="navbar-element">Mis Compras</h4></Link>
  <Link to={'/courses'}><h4 className="navbar-element">Productos</h4></Link>
  <h4 class ='navbar-element'>  Buscar: </h4>
        <input type="text" minlength="4" maxlength="8" size="10"></input>
</div>)
}
export default Navbar;
