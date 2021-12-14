import SubjectCard from "./SubjectCard";
import {useEffect, useState} from "react";
import imagnes from '../images/imgnes';
import {httpGet, httpPost} from "../utils/httpFunction";
import {Link} from "react-router-dom";

const Notebooks = () => {

  const [notebook, setNotebooks] = useState([])
  const [filtered, setFiltered] = useState(false)

  let finalSubjects = notebook

  const clickFunction = () => {
    setFiltered(!filtered)
  }

   const getName = () => {
    return filtered ? "Dejar de filtrar" : "FIltrar Mayores a $60000"
  }

  const fetchNotebook = () => {
    if (filtered) {
      httpGet('api/products/?tipoproducto=Notebook&price=60000')
      .then((res) => setNotebooks(res.data))
      }
  else {
    httpGet('api/products/?tipoproducto=Notebook')
        .then((res) => setNotebooks(res.data))
  }}
  

  useEffect(fetchNotebook, [filtered])

  return (<div className='general'>
    <div className="main-div">
      <h1 className="custom-title">Todas las notebooks</h1>
      <Link to={'/inicio'}><button class="btn btn-secondary">Volver al Inicio</button></Link>
      <button className="btn btn-primary" onClick={clickFunction}>
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

export default Notebooks