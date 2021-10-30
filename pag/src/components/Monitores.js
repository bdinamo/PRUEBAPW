import SubjectCard from "./SubjectCard";
import {useState} from "react";

const Monitores = () => {

  const [filtered, setFiltered] = useState(false)
  var image = 25;


  const subjects = [
    { name: 'Monitor1', descr: image } ,
    { name: 'Monitor2', descr: image },
    { name: 'Monitor3', descr: image } ,
    { name: 'Monitor4', descr: image }
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