import {useEffect, useState} from "react";
import {httpGet, httpPost, httpDelete} from "../utils/httpFunction"
import SubjectCard from "./SubjectCard";


const Addproduct = () => {

  const [products, setProducts] = useState([])

  const [name, setName] = useState([])
  const [description, setDescription] = useState([])
  const [price, setPrice] = useState([])
  const [tipoproducto, setTipoproducto] = useState([])
 

  let finalSubjects = products


  const fetchProducts = () => {
    httpGet('api/products/')
      .then((res) => setProducts(res.data))
  }

  const createProduct = () => {
    httpPost('api/products/', { name: name, description: description, price: price, tipoproducto: tipoproducto })
      .then(fetchProducts)
  }

  useEffect(fetchProducts, [])

  return (<div className='general'>
    <div className="main-div">
      <h1 className="custom-title">Agregar productos</h1>
    </div>
    <div className="main-div">
      <form onSubmit={createProduct}>
        <fieldset>
          <legend>Disabled fieldset example</legend>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">Tipo de producto</label>
            <input type="text" id="disabledTextInput1" className="form-control" value={tipoproducto}
                   onChange={(e) => setTipoproducto(e.target.value) }/>
          </div>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">Name</label>
            <input type="text" id="disabledTextInput2" className="form-control" value={name}
                   onChange={(e) => setName(e.target.value) }/>
          </div>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">Description</label>
            <input type="text" id="disabledTextInput3" className="form-control" value={description}
                   onChange={(e) => setDescription(e.target.value) } />
          </div>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">Precio</label>
            <input type="text" id="disabledTextInput4" className="form-control" value={price}
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