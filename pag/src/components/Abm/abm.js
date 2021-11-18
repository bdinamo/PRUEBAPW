import React, { Component } from 'react';
import '../Abm/abm.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import {Link} from "react-router-dom";
import pgimg from '../../images/Procesadores.jpg';

const url='http://127.0.0.1:8000/api/products/';

class Abm extends Component {
state={
  data:[],
  modalInsertar: false,
  modalEliminar: false,
  form:{
    id: '',
    name: '',
    description: '',
    price: '',
    tipoproducto: ''
  }
}

pedidoGet=()=>{
axios.get(url).then(response=>{
  this.setState({data: response.data});
}).catch(error=>{
  console.log(error.message);
})
}

PedidoPost=async()=>{
  delete this.state.form.id;
 await axios.post(url,this.state.form).then(response=>{
    this.modalInsertar();
    this.pedidoGet();
  }).catch(error=>{
    console.log(error.message);
  })
}

PedidoPut=()=>{
  axios.put(url+this.state.form.id+'/',this.state.form).then(response=>{
    this.modalInsertar();
    this.pedidoGet();
  })
}

PedidoDelete=()=>{
  axios.delete(url+this.state.form.id).then(response=>{
    this.setState({modalEliminar: false});
    this.pedidoGet();
  })
}

modalInsertar=()=>{
  this.setState({modalInsertar: !this.state.modalInsertar});
}

seleccionarProducto=(producto)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      id: producto.id,
      name: producto.name,
      description: producto.description,
      price: producto.price,
      tipoproducto:producto.tipoproducto
    }
  })
}

handleChange=async e=>{
await this.setState({
  form:{
    ...this.state.form,
    [e.target.name]: e.target.value
  }
});
console.log(this.state.form);
}

  componentDidMount() {
    this.pedidoGet();
  }
  

  render(){
    const {form}=this.state;
  return (
    <div className="App">
    <br /><br /><br />
  <button className="btn btn-primary" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar Producto</button>
  <Link to={'/inicio'}><button class="btn btn-secondary">Volver al Inicio</button></Link>
  
  <br /><br />
      <tbody>
      <div className="all-cards" >
        {this.state.data.map(producto=>{
          return(
            <tr><div className="card-container-custom">
            <div className="card">
            <img src={pgimg} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{producto.name} </h5>
                <h6 className="card-title">${producto.price} </h6>
                <p className="card-text">{producto.description}</p>
                <td>
                <button className="btn btn-primary" onClick={()=>{this.seleccionarProducto(producto); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                {"   "}
                <button className="btn btn-danger" onClick={()=>{this.seleccionarProducto(producto); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                </td>
              </div>
            </div>
          </div>
          </tr>
          )
        })}
        </div>
      </tbody>
  



  <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader style={{display: 'block'}}>
              <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
             </ModalHeader>
            <ModalBody>
                  <div className="form-group">
                   <label htmlFor="id">ID</label>
                    <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: ''}/>
                    <br />
                    <label htmlFor="nombre">Nombre</label>
                    <input className="form-control" type="text" name="name" id="nombre" onChange={this.handleChange} value={form?form.name: ''}/>
                    <br />
                    <label htmlFor="nombre">descripcion</label>
                    <input className="form-control" type="text" name="description" id="descripcion" onChange={this.handleChange} value={form?form.description: ''}/>
                    <br />
                    <label htmlFor="nombre">precio</label>
                    <input className="form-control" type="text" name="price" id="precio" onChange={this.handleChange} value={form?form.price: ''}/>
                    <br />
                    <label htmlFor="tipoproducto">tipoproducto</label>
                    <input className="form-control" type="text" name="tipoproducto" id="tipoproducto" onChange={this.handleChange} value={form?form.tipoproducto:''}/>
                  </div>
                </ModalBody>

                <ModalFooter>
                  {this.state.tipoModal=='insertar'?
                    <button className="btn btn-success" onClick={()=>this.PedidoPost()}>
                    Insertar
                  </button>: <button className="btn btn-primary" onClick={()=>this.PedidoPut()}>
                    Actualizar
                  </button>
                    }
                    <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                </ModalFooter>
          </Modal>


          <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
               Estás seguro que deseas eliminar el producto {form.name} ?
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>this.PedidoDelete()}>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
          </Modal>
  </div>



  );
}
}
export default Abm;