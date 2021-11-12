import SubjectCard from "./SubjectCard";
import {useEffect, useState} from "react";
import imagnes from '../images/imgnes';
import {httpGet, httpPost} from "../utils/httpFunction";
import {Link} from "react-router-dom";

const Notebooks = () => {

  const [notebook, setNotebooks] = useState([])

  const [name, setName] = useState([])
  const [description, setDescription] = useState([])
  const [price, setPrice] = useState([])

  let finalSubjects = notebook
  

  const fetchNotebook = () => {
    httpGet('api/products/?tipoproducto=Notebook')
      .then((res) => 
     setNotebooks(res.data))
  }
  

  const createNotebook = () => {
    httpPost('api/notebook/', { name: name, description: description})
      .then(fetchNotebook)
  }

  useEffect(fetchNotebook, [])

  return (<div className='general'>
    <div className="main-div">
      <h1 className="custom-title">Todas las notebooks</h1>
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

export default Notebooks