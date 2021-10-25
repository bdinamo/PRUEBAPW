import pgimg from "../images/mejores-notebooks-2021.jpg";

import {Link} from "react-router-dom";


function SubjectCard ({subject}) {

  return (
    <div className="card-container-custom">
      <div className="card">
        <img src={pgimg} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{subject.name}</h5>
          <p className="card-text">{subject.descr}</p>
          <Link to={`/courses/detail/${subject.name}`}><a className="btn btn-primary">Ver más</a></Link>
        </div>
      </div>
    </div>
  )
}
export default SubjectCard
