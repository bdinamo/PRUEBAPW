import SubjectCard from "./SubjectCard";
import {useState} from "react";

const Courses = () => {

  const [filtered, setFiltered] = useState(false)

  const subjects = [
    { name: 'Notebook' } ,
    { name: 'Monitores' } ,
    { name: 'Accesorios' } ,
    { name: 'Procesadores' }
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
      <h1 className="custom-title">Todos los productos</h1>
    </div>
    <div className="main-div">
      <button className="btn btn-primary" onClick={clickFunction}>
        {getName()}
      </button>
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

export default Courses
