import SubjectCard from "./SubjectCard";
import {useEffect, useState} from "react";
import imagnes from '../images/imgnes';
import {httpGet, httpPost} from "../utils/httpFunction";
import {Link} from "react-router-dom";

const Procesadores = () => {

  const [procesadores, setProcesadores] = useState([])

  let finalSubjects = procesadores

  const fetchProcesadores = () => {
    httpGet('api/products/?tipoproducto=Procesador')
      .then((res) => setProcesadores(res.data))
  }

  useEffect(fetchProcesadores, [])

  return (<div className='general'>
    <div className="main-div">
      <h1 className="custom-title">Todos los Procesadores</h1>
      <Link to={'/inicio'}><button class="btn btn-secondary">Volver al Inicio</button></Link>
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