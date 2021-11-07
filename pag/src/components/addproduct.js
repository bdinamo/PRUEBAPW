import SubjectCard from "./SubjectCard";
import {useEffect, useState} from "react";
import {httpGet, httpPost} from "../utils/httpFunction"


const Addproduct = () => {

  const [filtered, setFiltered] = useState(false)
  const [courses, setCourses] = useState([])

  const [name, setName] = useState([])
  const [description, setDescription] = useState([])
  const [price, setPrice] = useState([])
  const [tipo , setTipo] = useState([])


  const subjects = [
    { name: 'Matemática', approved: 12} ,
    { name: 'Programación Web', approved: 12} ,
    { name: 'Algoritmos', approved: 8}
  ]

  const clickFunction = () => {
    setFiltered(!filtered)
  }

  const getName = () => {
    return filtered ? "Dejar de filtrar" : "Filtrar"
  }

  let finalSubjects;

  if (filtered) {
    finalSubjects = courses.filter((subject) => {
      return subject.approved > 10
    })
  } else {
    finalSubjects = courses
  }

  const fetchCourses = () => {
    httpGet('api/product/')
      .then((res) => setCourses(res.data))
  }

  const createCourse = () => {
    httpPost('api/product/', { name: name, description: description, price: price, tipo: tipo})
      .then(fetchCourses)
  }

  useEffect(fetchCourses, [])

  return (<div className='general'>
    <div className="main-div">
      <h1 className="custom-title">Todos los cursos</h1>
    </div>
    <div className="main-div">
      <button className="btn btn-primary" onClick={clickFunction}>
        {getName()}
      </button>
      <form onSubmit={createCourse}>
        <fieldset>
          <legend>Disabled fieldset example</legend>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label" >Tipo de producto</label>
           <input type="text" id="disabledTextInput" className="form-control"
           placeholder= 'notebook, monitor o procesador' value={tipo}
                   onChange={(e) => setTipo(e.target.value) }/>
          </div>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">Name</label>
            <input type="text" id="disabledTextInput" className="form-control" value={name}
                   onChange={(e) => setName(e.target.value) }/>
          </div>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">Description</label>
            <input type="text" id="disabledTextInput" className="form-control" value={description}
                   onChange={(e) => setDescription(e.target.value) }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">Precio</label>
            <input type="text" id="disabledTextInput" className="form-control" value={price}
                   onChange={(e) => setPrice(e.target.value) }/>
          </div>
          <button type="submit" className="btn btn-primary">CREAR PRODUCTO</button>
        </fieldset>
      </form>
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

export default Addproduct