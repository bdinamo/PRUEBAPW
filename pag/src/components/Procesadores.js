import SubjectCard from "./SubjectCard";
import {useEffect, useState} from "react";
import {httpGet} from "../utils/httpFunction";
import {Link} from "react-router-dom";

const Procesadores = () => {

  const [procesadores, setProcesadores] = useState([])
  const [filtered, setFiltered] = useState(true)

  let finalSubjects = procesadores

  const getName = () => {
    return filtered ?  "Dejar de filtrar" : "FIltrar Mayores a $100000" 
  }

  const fetchProcesadores = () => {
    setFiltered(!filtered)
    if (filtered) {
      httpGet('api/products/?tipoproducto=Procesador')
        .then((res) => setProcesadores(res.data))
        
      }
  else {
    httpGet('api/products/?tipoproducto=Procesador&price=100000')
      .then((res) => setProcesadores(res.data))
  }}

  useEffect(fetchProcesadores, [])

  return (<div className='general'>
    <div className="main-div">
      <h1 className="custom-title">Todos los Procesadores</h1>
      <Link to={'/inicio'}><button class="btn btn-secondary">Volver al Inicio</button></Link>
      <button className="btn btn-primary" onClick={fetchProcesadores}>
        {getName()}
      </button>
    </div>
    <div className="main-div">
    </div>
    <div className="all-cards">
    {
        finalSubjects
          .map((mapSubject) => {
            return (
              <SubjectCard subject={mapSubject}/>
            )
          })
      }
    </div>
  </div>)
}

export default Procesadores