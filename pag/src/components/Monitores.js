
import SubjectCard from "./SubjectCard";
import {useEffect, useState} from "react";
import {httpGet} from "../utils/httpFunction";
import {Link} from "react-router-dom";

const Monitores = () => {

  const [monitores, setMonitores] = useState([])
  const [filtered, setFiltered] = useState(false)

  let finalSubjects = monitores

  const clickFunction = () => {
    setFiltered(!filtered)
  }

  const getName = () => {
    return filtered ? "Dejar de filtrar" : "Filtrar mayores a $200000"
  }

  const fetchMonitores = () => {
    if (filtered) {
      httpGet('api/products/?tipoproducto=Monitor&price=200000')
      .then((res) => setMonitores(res.data))
  }
  else {
    httpGet('api/products/?tipoproducto=Monitor')
    .then((res) => setMonitores(res.data))
  }}

  
  useEffect(fetchMonitores,[filtered])

  return (<div className='general'>

    <div className="main-div">
      <h1 className="custom-title">Todos los monitores</h1>
      <Link to={'/inicio'}><button class="btn btn-secondary">Volver al Inicio</button></Link>
      <button className="btn btn-primary" onClick={clickFunction}>
        {getName()}
      </button>
    </div>
    <div className="main-div">
    </div>
    <div className="all-cards">{
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

export default Monitores