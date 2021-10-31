import SubjectCard from "./SubjectCard";
import {useState} from "react";

const Monitores = () => {

  const [filtered, setFiltered] = useState(false)
  

  const subjects = [
    { name: 'Monitor1'},
    { name: 'Monitor2'},
    { name: 'Monitor3'},
    { name: 'Monitor4'}
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
      <h1 className="custom-title">Todos los Monitores</h1>
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

export default Monitores