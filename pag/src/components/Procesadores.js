import SubjectCard from "./SubjectCard";
import {useState} from "react";
import Images from '../images/imgnes'

const Procesadores = () => {

  const [filtered, setFiltered] = useState(false)

  const subjects = [
    { name: 'Intel', img: Images.intel , descr: 'Esta es la descripcion' } ,
    { name: 'AMD', img: Images.amd } ,
    { name: 'Otros', img: Images.proces } ,

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