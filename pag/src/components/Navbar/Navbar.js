import './Navbar.css';
import {Link} from "react-router-dom";


const Navbar = () => {
  return <div className="navbar">
    <Link to={'/Inicio'}><button class="btn btn-secondary">Inicio</button></Link>
    <Link to={'/login'}><button class="btn btn-secondary">Ingresá</button></Link>
    <Link to={'/register'}><button class="btn btn-secondary">Registrate</button></Link>
    <Link to={'/profile'}><button class="btn btn-secondary">Mis compras</button></Link>
    <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Productos
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Link to={'/Notebook'}><a class="dropdown-item" href='#'>Notebook</a></Link>
        <Link to={'/Monitores'}><a class="dropdown-item" href="#">Monitores</a></Link>
        <Link to={'/Accesorios'}><a class="dropdown-item" href="#">Accesorios</a></Link>
        <Link to={'/Procesadores'}><a class="dropdown-item" href="#">Procesadores</a></Link>
        <Link to={'/addproduct'}><a class="dropdown-item" href="#">Agregar producto</a></Link>
        <li><hr class="dropdown-divider"></hr></li>
        <Link to={'/Products'}><li><a class="dropdown-item" href="#">Todos los productos</a></li></Link>
    </div>
</div>
    <button className= "btn btn-secondary">  Buscar:</button>
    <button className="navbar-element-barra" ><input type="text" maxlength="50"></input></button>
    </div>
}
export default Navbar;
