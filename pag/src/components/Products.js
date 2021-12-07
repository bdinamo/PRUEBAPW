import {useEffect, useState} from "react";
import {httpGet} from "../utils/httpFunction"
import SubjectCard from "./SubjectCard";
import {Link} from "react-router-dom";


const Product = () => {

 const [products, setProducts] = useState([])
 const [filtered, setFiltered] = useState(true)

 const getName = () => {
  return filtered ? "Dejar de filtrar" :"FIltrar Mayores a $100000" 
}


 const fetchProducts = () => {
  setFiltered(!filtered)
  if (filtered) {
    httpGet('api/products/')
    .then((res) => setProducts(res.data))
    }
else {
  httpGet('api/products/?price=100000')
    .then((res) => setProducts(res.data))
  
}}


  useEffect(fetchProducts, []) 


    return (<div className='general'>
    <div className="main-div">
      <h1 className="custom-title">Todos los Productos</h1>
      <Link to={'/inicio'}><button class="btn btn-secondary">Volver al Inicio</button></Link>
      <button className="btn btn-primary" onClick={fetchProducts}>
        {getName()}
      </button>
    </div>
    <div className="main-div">
    </div>
    <div className="all-cards">
      {
      products
      .map((mapSubject) => {
        return (
          <SubjectCard subject={mapSubject}/>
            )
          })
      }
    </div>
  </div>)
}
export default Product