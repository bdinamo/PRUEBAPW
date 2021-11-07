import SubjectCard from "./SubjectCard";
import {useEffect, useState} from "react";
import imagnes from '../images/imgnes';
import {httpGet, httpPost} from "../utils/httpFunction"

const Notebooks = () => {

  const [filtered, setFiltered] = useState(false)
  const [notebook, setNotebooks] = useState([])

  const [name, setName] = useState([])
  const [description, setDescription] = useState([])

  const imagenes = [
    { name: 'notebook28', img: imagnes.notebooks } ,
    { name: 'notebook29', img: imagnes.notebooks } ,
    { name: 'notebook30', img: imagnes.notebooks } ,
    { name: 'notebook31', img: imagnes.notebooks }
  ]

  const clickFunction = () => {
    setFiltered(!filtered)
  }

  const getName = () => {
    return filtered ? "Dejar de filtrar" : "Filtrar"
  }

  let finalSubjects;

  if (filtered) {
    finalSubjects = imagenes.filter((subject) => {
      return imagenes.approved > 10
    })
  } else {
    finalSubjects = notebook
  }

  const fetchNotebook = () => {
    httpGet('api/notebook/')
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