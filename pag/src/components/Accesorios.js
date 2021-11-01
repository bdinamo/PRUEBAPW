import SubjectCard from "./SubjectCard";
import {useState} from "react";
import imagnes from '../images/imgnes';

const Accesorios = () => {

  const [filtered, setFiltered] = useState(false)

  const subjects = [
    { name: 'Accesorio1', img:imagnes.accesorios  } ,
    { name: 'Accesorio2', img:imagnes.accesorios  } ,
    { name: 'Accesorio3', img:imagnes.accesorios  } ,
    { name: 'Accesorio4', img:imagnes.accesorios  }
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