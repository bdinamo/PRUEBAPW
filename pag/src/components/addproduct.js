import SubjectCard from "./SubjectCard";
import {useEffect, useState} from "react";
import {httpGet, httpPost} from "../utils/httpFunction"


const Addproduct = () => {

  const [courses, setCourses] = useState([])

  const [name, setName] = useState([])
  const [description, setDescription] = useState([])
  const [price, setPrice] = useState([])
 

  let finalSubjects = courses


  const fetchCourses = () => {
    httpGet('api/procesadores/')
      .then((res) => setCourses(res.data))
  }

  const createCourse = () => {
    httpPost('api/procesadores/', { name: name, description: description, price: price})
      .then(fetchCourses)
  }

  useEffect(fetchCourses, [])

  return (<div className='general'>
    <div className="main-div">
      <h1 className="custom-title">Agregar productos</h1>
    </div>
    <div className="main-div">
      <form onSubmit={createCourse}>
        <fieldset>
          <legend>Disabled fieldset example</legend>
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