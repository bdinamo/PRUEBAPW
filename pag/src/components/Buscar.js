import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import pgimg from "../images/Procesadores.jpg";
import './buscar.css'


function Search() {

  const [productos, setProductos]= useState([]);
  const [tablaProductos, setTablaProductos]= useState([]);
  const [busqueda, setBusqueda]= useState("");

const peticionGet=async()=>{
  await axios.get('http://127.0.0.1:8000/api/products/')
  .then(response=>{
    setProductos(response.data);
    setTablaProductos(response.data);
  }).catch(error=>{
    console.log(error);
  })
}

const handleChange=e=>{
  setBusqueda(e.target.value);
  filtrar(e.target.value);
}

const filtrar=(terminoBusqueda)=>{
  var resultadosBusqueda=tablaProductos.filter((elemento)=>{
    if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    || elemento.description.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    || elemento.price.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    ){
      return elemento;
    }
  });
  setProductos(resultadosBusqueda);
}

useEffect(()=>{
peticionGet();
},[])

  return (
    <div className="App">
      <div className="containerInput">
      <Link to={'/inicio'}><button class="btn btn-secondary">Volver al Inicio</button></Link>
      <button className="btn btn-primary inputBuscar">
          <input
          className= 'inputBuscar'
          value={busqueda}
          placeholder="Búsqueda por Producto, descripción o precio"
          onChange={handleChange}/>
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>
        
      <div className="all-cards" >
       {productos && 
           productos.map((producto)=>( 
        <div className="all-cards" >
       <div className="card-container-custom">
      <div className="card">
      <img src={pgimg} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{producto.name} </h5>
          <h6 className="card-title">${producto.price} </h6>
          <p className="card-text">{producto.description}</p>
          <Link to={`/carrito`}><a className="btn btn-primary">Comprar en la tienda</a></Link>
        </div>
      </div>
    </div>
    </div>
           ))}</div></div>
     
           );
}
export default Search