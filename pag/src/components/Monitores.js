
import SubjectCard from "./SubjectCard";
import {useEffect, useState} from "react";
import imagnes from '../images/imgnes';
import {httpGet, httpPost} from "../utils/httpFunction"

const Monitores = () => {

  const [monitores, setMonitores] = useState([])

  const [name, setName] = useState([])
  const [description, setDescription] = useState([])
  const [price, setPrice] = useState([])
  

   let finalSubjects = monitores
  

  const fetchMonitores = () => {
    httpGet('api/monitores/')
      .then((res) => setMonitores(res.data))
  }

  const createMonitores = () => {
    httpPost('api/monitores/', { name: name, description: description, price: price})
      .then(fetchMonitores)
  }

  useEffect(fetchMonitores, [])

  return (<div className='general'>

    <div className="main-div">
      <h1 className="custom-title">Todos los monitores</h1>
    </div>
    <div className="main-div">
    </div>
    <div className="all-cards">{
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