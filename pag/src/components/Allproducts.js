import pgimg from "../images/mejores-notebooks-2021.jpg";

import {Link} from "react-router-dom";

function Allproducts ({product}) {

return (
    <div className="card-container-custom">
      <div className="card">
          {
              product.img
                  ? <img src={product.img} className="card-img-top" alt="..."/>
                  : <img src="https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6" className="card-img-top" alt="..."/>
          }
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <Link to={`/products/detail/${product.name}`}><a className="btn btn-primary">Ver Más</a></Link>
        </div>
      </div>
    </div>
  )
}

export default Allproducts