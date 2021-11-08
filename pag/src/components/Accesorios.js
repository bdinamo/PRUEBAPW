import SubjectCard from "./SubjectCard";
import {useEffect, useState} from "react";
import imagnes from '../images/imgnes';
import {httpGet, httpPost} from "../utils/httpFunction"


const Accesorios = () => {

  const [filtered, setFiltered] = useState(false)
  const [accesorios, setCourses] = useState([])

  const [name, setName] = useState([])
  const [description, setDescription] = useState([])
  

  const imagenes = [
    { name: 'Mauses', img:imagnes.accesorios  } ,
    { name: 'Teclados', img:imagnes.accesorios  } ,
    { name: 'Auriculares', img:imagnes.accesorios  } ,
    { name: 'CamarasWeb', img:imagnes.accesorios  }
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
      return subject.approved > 10
    })
  } else {
    finalSubjects = accesorios
  }

  const fetchCourses = () => {
    httpGet('api/product/')
      .then((res) => setCourses(res.data))
  }

  const createCourse = () => {
    httpPost('api/product/', { name: name, description: description})
      .then(fetchCourses)
  }

  useEffect(fetchCourses, [])

  return (<div className='general'>
    <div className="main-div">
      <h1 className="custom-title">Todos los accesorios</h1>
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

export default Accesorios