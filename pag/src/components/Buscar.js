
import {useEffect, useState} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Búsqueda por Producto, descripción o precio"
          onChange={handleChange}/>
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>

     <div className="table-responsive">
       <table className="table table-sm table-bordered">
         <thead>
           <tr>
             <th>Nombre</th>
             <th>Descripcion</th>
             <th>Precio</th>
           </tr>
         </thead>

         <tbody>
           {productos && 
           productos.map((producto)=>(
             <tr key={producto.id}>
               <td>{producto.name}</td>
               <td>{producto.description}</td>
               <td>{producto.price}</td>
             </tr>
           ))}
         </tbody>

       </table>

     </div>
    </div>
  );
}

export default Search;