
import {useEffect, useState} from "react";
import {httpGet} from "../utils/httpFunction";

const Profile = () => {

  const [userData, setUserData] = useState({})

  useEffect(() => {
    httpGet('api/me/').then((res) => setUserData(res.data))
  }, [])

  return <div>
    <h2>Hola! Este es mi perfil</h2>
    <h3>Mi nombre de es {userData.first_name}</h3>
    <h3>Mi apellido es  {userData.last_name}</h3>
    <h3>Mi correo electrónico es {userData.email}</h3>
    <h3>Mi nombre de usuario es {userData.username}</h3>
  </div>
}

export default Profile