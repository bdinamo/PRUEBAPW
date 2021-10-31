import  {useParams} from 'react-router-dom'

const Productdetail = ({name, description, hours}) => {

  const displayHours = hours ? ('Número de horas :' + hours) : ('No hay detalle especificado para este producto')

  let { id } = useParams();

  return (
    <div>
      <h1>{name}</h1>
      <h2>Hola! El id de este producto es {id}</h2>
      <h4>{description}</h4>
      <p>{displayHours}</p>
    </div>
  )
}

export default Productdetail
