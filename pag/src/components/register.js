
import SubjectCard from "./SubjectCard";
import {useEffect, useState} from "react";
import {httpPost2} from "../utils/httpFunction"
import {useHistory} from 'react-router-dom'


const Register = () => {

  const [first_name, setFirstname] = useState([])
  const [last_name, setLastname] = useState([])
  const [email, setEmail] = useState([])
  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])
  const history = useHistory();

  const signin = (e) => {
    e.preventDefault()
    httpPost2('api/register/', { first_name : first_name, last_name : last_name, email : email, username : username,
      password : password}).then(() => { 
      history.push('/Login')
    })
  }
  

  return (
  <div className='login-screen'>
      <div className='welcome-text-container'><h1>Bienvenidos a nuestro portal de compra y ventas</h1></div>
      <div className='form-container'>
  <div className="main-div">
    <form onSubmit={signin}>
      <fieldset>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">Name</label>
          <input type="text" id="disabledTextInput" className="form-control" value={first_name}
                 onChange={(e) => setFirstname(e.target.value) }/>
        </div>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">Apellido</label>
          <input type="text" id="disabledTextInput" className="form-control" value={last_name}
                 onChange={(e) => setLastname(e.target.value) }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">Email</label>
          <input type="text" id="disabledTextInput" className="form-control" value={email}
                 onChange={(e) => setEmail(e.target.value) }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">Usuario</label>
          <input type="text" id="disabledTextInput" className="form-control" value={username}
                 onChange={(e) => setUsername(e.target.value) }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">Contraseña</label>
          <input type="password" id="disabledTextInput" className="form-control" value={password}
                 onChange={(e) => setPassword(e.target.value) }
          />
        </div>
        <button type="submit" className="btn btn-primary">Registrarse</button>
      </fieldset>
    </form>
    </div>
  </div>
  </div>
)
}

const cartel = () => {
  return(
  <div class="alert alert-warning alert-dismissable">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <strong>¡Cuidado!</strong> Es muy importante que leas este mensaje de alerta.
  </div>)}

export default Register
