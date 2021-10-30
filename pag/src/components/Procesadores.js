import SubjectCard from "./SubjectCard";
import {useState} from "react";

const Procesadores = () => {

  const [filtered, setFiltered] = useState(false)

  const subjects = [
    { name: 'Procesador1' } ,
    { name: 'Procesador2' } ,
    { name: 'Procesador3' } ,
    { name: 'Procesador4' }
  ]

  const clickFunction = () => {
    setFiltered(!filtered)
  }

  const getName = () => {
    return filtered ? "Dejar de filtrar" : "Filtrar"
  }

  let finalSubjects;

  if (filtered) {
    finalSubjects = subjects.filter((subject) => {
      return subject.approved > 10
    })
  } else {
    finalSubjects = subjects
  }

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