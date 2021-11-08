
import SubjectCard from "./SubjectCard";
import {useEffect, useState} from "react";
import {httpGet, httpPost} from "../utils/httpFunction"


const Register = () => {

  const [register, setRegister] = useState([])
  const [first_name, setFirstname] = useState([])
  const [last_name, setLastname] = useState([])
  const [email, setEmail] = useState([])
  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])



  const fetchRegister = () => {
    httpGet('api/register/')
      .then((res) => setRegister(res.data))
  }

  const createRegister = () => {
    httpPost('api/register/', { first_name : first_name, last_name : last_name, email : email, username : username,
    password : password})
  }

  useEffect(fetchRegister, [])

  return (
  <div className='login-screen'>
      <div className='welcome-text-container'><h1>Bienvenidos a nuestro portal de compra y ventas</h1></div>
      <div className='form-container'>
  <div className="main-div">
    <form onSubmit={createRegister}>
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
          <input type="text" id="disabledTextInput" className="form-control" value={password}
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

export default Register
