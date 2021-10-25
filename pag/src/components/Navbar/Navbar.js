import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = () => {
  return <div className="navbar">
    <Link to={'/'}><h4 className="navbar-element">Inicio</h4></Link>
    <Link to={'/profile'}><h4 className="navbar-element">Ingresá</h4></Link>
    <Link to={'/register'}><h4 className="navbar-element">Registrate</h4></Link>
    <Link to={'/courses'}><h4 className="navbar-element">Mis Compras</h4></Link>
    <Link to={'/courses'}><h4 className="navbar-element">Productos</h4></Link>
    <h4 className= 'navbar-element'>  Buscar: </h4><Link to={'/courses'}>
    <h4 className="navbar-element-barra"><input type="text" ></input></h4></Link>

</div>
}
export default Navbar;
