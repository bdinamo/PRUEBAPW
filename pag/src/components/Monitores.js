
import SubjectCard from "./SubjectCard";
import {useEffect, useState} from "react";
import imagnes from '../images/imgnes';
import {httpGet, httpPost} from "../utils/httpFunction"

const Monitores = () => {


  const [filtered, setFiltered] = useState(false)
  const [monitores, setCourses] = useState([])

  const [name, setName] = useState([])
  const [description, setDescription] = useState([])
  

  const imagenes = [
    { name: 'LG', img:imagnes.LG},
    { name: 'Asus', img:imagnes.asus},
    { name: 'Samsung', img:imagnes.samsung},
    { name: 'HP', img:imagnes.HP},
    { name: 'DELL', img:imagnes.Dell},
    { name: 'BENQ', img:imagnes.Benq},
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
    finalSubjects = monitores
  }

  const fetchCourses = () => {
    httpGet('api/monitores/')
      .then((res) => setCourses(res.data))
  }

  const createCourse = () => {
    httpPost('api/monitores/', { name: name, description: description})
      .then(fetchCourses)
  }

  useEffect(fetchCourses, [])

  return (<div className='general'>

    <div className="main-div">
      <h1 className="custom-title">Nuestras marcas</h1>
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