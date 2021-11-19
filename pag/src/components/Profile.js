
import {useEffect, useState} from "react";
import {httpGet} from "../utils/httpFunction";
import { Link } from "react-router-dom";
import './Profile.css'

const Profile = () => {

  const [userData, setUserData] = useState({})

  useEffect(() => {
    httpGet('api/me/').then((res) => setUserData(res.data))
  }, [])

  return <div className='profileback'><ul className="list-group tituloprofile">
      <h2 className='tituloprofile'> Mi perfil</h2>
  <li class="list-group-item">Mi nombre de es: {userData.first_name}</li>
  <li class="list-group-item">Mi apellido es:  {userData.last_name}</li>
  <li class="list-group-item">Mi correo electrónico es: {userData.email}</li>
  <li class="list-group-item">Mi nombre de usuario es: {userData.username}</li>
  <Link to={'/inicio'}><button class="btn btn-secondary tituloprofile">Volver al Inicio</button></Link>
</ul></div>
}

export default Profile