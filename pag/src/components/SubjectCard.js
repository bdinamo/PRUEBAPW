import pgimg from "../images/mejores-notebooks-2021.jpg";

import {Link} from "react-router-dom";


function SubjectCard ({subject}) {

  return (
    <div className="card-container-custom">
      <div className="card">
        {
          subject.img
            ? <img src={subject.img} className="card-img-top" alt="..."/>
            : <img src="../images/not image.jpg" className="card-img-top" alt="..."/>
        }
        <div className="card-body">
          <h5 className="card-title">{subject.name}</h5>
          <p className="card-text">{subject.descr}</p>
          <Link to={`/products/detail/${subject.name}`}><a className="btn btn-primary">Ver detalle</a></Link>
        </div>
      </div>
    </div>
  )
}
export default SubjectCard
