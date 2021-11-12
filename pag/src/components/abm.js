import React, { Component } from 'react';
import './abm.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import {Link} from "react-router-dom";

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

peticionGet=()=>{
axios.get(url).then(response=>{
  this.setState({data: response.data});
}).catch(error=>{
  console.log(error.message);
})
}

peticionPost=async()=>{
  delete this.state.form.id;
 await axios.post(url,this.state.form).then(response=>{
    this.modalInsertar();
    this.peticionGet();
  }).catch(error=>{
    console.log(error.message);
  })
}

peticionPut=()=>{
  axios.put(url+this.state.form.id+'/',this.state.form).then(response=>{
    this.modalInsertar();
    this.peticionGet();
  })
}

peticionDelete=()=>{
  axios.delete(url+this.state.form.id).then(response=>{
    this.setState({modalEliminar: false});
    this.peticionGet();
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
e.persist();
await this.setState({
  form:{
    ...this.state.form,
    [e.target.name]: e.target.value
  }
});
console.log(this.state.form);
}

  componentDidMount() {
    this.peticionGet();
  }
  

  render(){
    const {form}=this.state;
  return (
    <div className="App">
    <br /><br /><br />
  <button className="btn btn-primary" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar Producto</button>
  <Link to={'/inicio'}><button class="btn btn-secondary">Volver al Inicio</button></Link>
  
  <br /><br />
    <table className="table ">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Precio</th>
          <th>Tipo de producto</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(producto=>{
          return(
            <tr>
              <td>{producto.id}</td>
          <td>{producto.name}</td>
          <td>{producto.description}</td>
          <td>{producto.price}</td>
          <td>{producto.tipoproducto}</td>
          <td>
                <button className="btn btn-primary" onClick={()=>{this.seleccionarProducto(producto); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                {"   "}
                <button className="btn btn-danger" onClick={()=>{this.seleccionarProducto(producto); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                </td>
          </tr>
          )
        })}
      </tbody>
    </table>



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
                    <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                    Insertar
                  </button>: <button className="btn btn-primary" onClick={()=>this.peticionPut()}>
                    Actualizar
                  </button>
                    }
                    <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                </ModalFooter>
          </Modal>


          <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
               Estás seguro que deseas eliminar el producto {form && form.name} ?
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
          </Modal>
  </div>



  );
}
}
export default Abm;