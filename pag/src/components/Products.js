import Allproducts from "./Allproducts";
import {useState} from "react";
import images from "../images/imgnes";
const product = () => {
    const producto = [
    { name: 'Notebook', img: images.notebooks },
    { name: 'Monitores', img: images.monitores},
    { name: 'Accesorios', img: images.accesorios},
    { name: 'Procesador', img: images.Procesadores}
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