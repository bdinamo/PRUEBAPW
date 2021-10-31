import Allproducts from "./Allproducts";
import {useState} from "react";

const product = () => {
    const producto = [
    { name: 'Notebook'},
    { name: 'Monitores'},
    { name: 'Accesorios'},
    { name: 'Procesadores'}
    ]

    return (<div className='general'>
    <div className="main-div">
      <h1 className="custom-title">Todos los Productos</h1>
    </div>
    <div className="main-div">
    </div>
    <div className="all-cards">
      {
      producto
      .map((mapSubject) => {
        return (
          <Allproducts product={mapSubject}/>
            )
          })
      }
    </div>
  </div>)
}
export default product