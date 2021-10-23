import SubjectCard from "./SubjectCard";
import {useState} from "react";

const Courses = () => {

  const [filtered, setFiltered] = useState(false)

  const subjects = [
    { name: 'Notebook', descr: '1' ,approved: 12} ,
    { name: 'Monitores',descr: '2' ,approved: 12} ,
    { name: 'Accesorios',descr: '3' , approved: 8} ,
    { name: 'Procesadores',descr: '4' , approved: 7}
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
