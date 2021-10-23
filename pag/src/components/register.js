
import {Link} from "react-router-dom";

const Register = () => {


  return (
    <div className='login-screen'>
      <div className='welcome-text-container'><h1>Bienvenidos a nuestro portal de compra y ventas</h1></div>
      <div className='form-container'>
      <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Juan"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Apellido</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Perez"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Password" />
        </div>
        <div className={'button-container'}>
          <Link to={"/courses"}><button type="button" className="btn btn-primary">Login</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Register
