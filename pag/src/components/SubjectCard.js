import pgimg from "../images/Procesadores.jpg";

import {Link} from "react-router-dom";


function SubjectCard ({subject}) {

  return (
    <div className="card-container-custom">
      <div className="card">
      <img src={pgimg} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{subject.name} </h5>
          <h6 className="card-title">${subject.price} </h6>
          <p className="card-text">{subject.description}</p>
          <Link to={`/carrito`}><a className="btn btn-primary">Comprar en la tienda</a></Link>
        </div>
      </div>
    </div>
  )
}
export default SubjectCard