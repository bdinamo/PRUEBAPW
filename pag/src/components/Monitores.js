
import SubjectCard from "./SubjectCard";
import {useState} from "react";
import imagnes from '../images/imgnes';

const Monitores = () => {




  const [filtered, setFiltered] = useState(false)
  

  const subjects = [
    { name: 'LG', img:imagnes.monitores},
    { name: 'Asus', img:imagnes.monitores},
    { name: 'Samsung', img:imagnes.monitores},
    { name: 'HP', img:imagnes.monitores},
    { name: 'ViewSonic', img:imagnes.monitores},
    { name: 'BENQ', img:imagnes.monitores},
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