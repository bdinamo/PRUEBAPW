import './Navbar.css';
import {Link} from "react-router-dom";
import Header from '../Cart/Headers';


const Navbar = () => {

   
  return <div className="navbar">
    <Link to={'/Inicio'}><button class="btn btn-secondary">Inicio</button></Link>
    <Link to={'/login'}><button class="btn btn-secondary">Ingresá</button></Link>
    <Link to={'/register'}><button class="btn btn-secondary">Registrate</button></Link>
    <Link to={'/profile'}><button class="btn btn-secondary">Mi perfil</button></Link>
    <Link to={'/carrito'}><button class="btn btn-secondary">Tienda virtual</button></Link>
    <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Productos
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Link to={'/Notebook'}><a class="dropdown-item" href='#'>Notebook</a></Link>
        <Link to={'/Monitores'}><a class="dropdown-item" href="#">Monitores</a></Link>
        <Link to={'/Procesadores'}><a class="dropdown-item" href="#">Procesadores</a></Link>
        <li><hr class="dropdown-divider"></hr></li>
        <Link to={'/products'}><li><a class="dropdown-item" href="#">Todos los productos</a></li></Link>
        <li><hr class="dropdown-divider"></hr></li>
        <Link to={'/abm'}><li><a class="dropdown-item" href="#">Abm</a></li></Link>
    </div>
</div>
<Link to={'/search'}><button className= "btn btn-secondary" >Buscar</button></Link>
    </div>
}
export default Navbar;
