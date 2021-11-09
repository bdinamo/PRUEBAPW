import SubjectCard from "./SubjectCard";
import {useEffect, useState} from "react";
import imagnes from '../images/imgnes';
import {httpGet, httpPost} from "../utils/httpFunction"

const Procesadores = () => {

  const [procesadores, setProcesadores] = useState([])

  const [name, setName] = useState([])
  const [description, setDescription] = useState([])
  const [price, setPrice] = useState([])

  let finalSubjects = procesadores

  const fetchProcesadores = () => {
    httpGet('api/products/?tipoproducto=Procesador')
      .then((res) => setProcesadores(res.data))
  }

  console.log(procesadores)

  const createProcesadores = () => {
    httpPost('api/procesadores/', { name: name, description: description, price: price})
      .then(fetchProcesadores)
  }

  useEffect(fetchProcesadores, [])

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