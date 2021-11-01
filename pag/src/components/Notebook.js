import SubjectCard from "./SubjectCard";
import {useState} from "react";
import imagnes from '../images/imgnes';

const Notebooks = () => {

  const [filtered, setFiltered] = useState(false)

  const subjects = [
    { name: 'Notebook1', img: imagnes.notebooks } ,
    { name: 'Notebook2', img: imagnes.notebooks } ,
    { name: 'Notebook3', img: imagnes.notebooks } ,
    { name: 'Notebook4', img: imagnes.notebooks }
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