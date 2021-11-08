import SubjectCard from "./SubjectCard";
import {useEffect, useState} from "react";
import imagnes from '../images/imgnes';
import {httpGet, httpPost} from "../utils/httpFunction"

const Procesadores = () => {

  const [filtered, setFiltered] = useState(false)
  const [procesadores, setCourses] = useState([])

  const [name, setName] = useState([])
  const [description, setDescription] = useState([])

  const imagenes = [
    { name: 'Intel', img: imagnes.intel , description: 'Los nombres de los procesadores Intel® son útiles a la hora de elegir una CPU para gaming. Considéralos una clave para comprender los atributos de un procesador en particular. Los nombres de CPU Intel® contienen información sobre las capacidades de una CPU, incluido el desempeño, las características y el uso previsto, lo que ayuda a identificar rápidamente la CPU adecuada para tu juego.' } ,
    { name: 'AMD', img: imagnes.amd ,description: 'Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles.AMD cuenta con un catálogo de productos que se adaptan a los requerimientos de todo tipo de usuarios: juegos en línea, edición a gran escala, contenido en múltiples plataformas y más.' } ,
    { name: 'Otros', img: imagnes.proces, description: '' } ,

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
    finalSubjects = procesadores
  }
  const fetchCourses = () => {
    httpGet('api/procesadores/')
      .then((res) => setCourses(res.data))
  }

  const createCourse = () => {
    httpPost('api/procesadores/', { name: name, description: description})
      .then(fetchCourses)
  }

  useEffect(fetchCourses, [])

  return (<div className='general'>
    <div className="main-div">
      <h1 className="custom-title">Todos los Procesadores</h1>
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