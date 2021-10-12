import React, { Component } from "react";
import './RegistrarVentas.css';
import "bootstrap/dist/css/bootstrap.min.css";

const dataClient = [
  { id: 1, nombre: "nombre1", apellido: "apellido1", documento:"123456781", telefono: "789456121" },
  { id: 2, nombre: "nombre2", apellido: "apellido2", documento:"123456782", telefono: "789456122" },
  { id: 3, nombre: "nombre3", apellido: "apellido3", documento:"123456783", telefono: "789456123" },
  { id: 4, nombre: "nombre4", apellido: "apellido4", documento:"123456784", telefono: "789456124" }
  ];

const dataProduct = [
  {id: 1, codigo: "1", descripcion:"Producto 1", valor_unitario: 1},
  {id: 2, codigo: "2", descripcion:"Producto 2", valor_unitario: 2},
  {id: 3, codigo: "3", descripcion:"Producto 3", valor_unitario: 4},
  {id: 4, codigo: "4", descripcion:"Producto 4", valor_unitario: 6},
  {id: 5, codigo: "5", descripcion:"Producto 5", valor_unitario: 8}
];

export class RegistrarVentas extends Component {
  constructor(props) {
    super(props);
    this.name = {value: 'Nombre'};
  }

  state = {
    dataClient: dataClient,
    dataProduct: dataProduct,
    formClient:{
      id:"",
      nombre:"",
      apellido:"",
      docuemnto:"",
      telefono:""
    },
    formProduct:{
      id:"",
      codigo:"",
      descripcion:"",
      valor_unitario:""
    },
  };  
   

  handleChange=event => {
    this.setState({
      formClient:{
        ...this.state.formClient,
        [event.target.name]: event.target.value,
      },
      formProduct:{
        ...this.state.formProduct,
        [event.target.name]: event.target.value,
      }})
  }

  buscar=()=>{
    this.name.value = this.state.data[0].nombre;
  }

  render() {
    return (
      
      <div>
        <h1  align='center'>Registrar Nueva Venta</h1>
      
        <input type="text" name="order" placeholder="Orden 1958" disabled/ >
      <br/> <br/>
      
      <label for="find">Buscar Cliente : </label>
      <input type="text" name="client"onChange={this.handleChange} />
      if(false){
        <table class="table table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Documento</th>
              <th>Telefono</th>
            </tr>
          </thead>

          <tbody>
            {this.state.dataClient.map((dato) => (
              <tr key={dato.id}>
                <td>{dato.id}</td>
                <td>{dato.nombre}</td>
                <td>{dato.apellido}</td>
                <td>{dato.documento}</td>
                <td>{dato.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }

      <label for="find">Buscar producto : </label>
      <input type="text" name="product" onChange={this.handleChange} />

      <button color="primary" onClick={() => this.buscar()}>
          Buscar
      </button>
      
      
      <form action="#" target="" method="get" name="formDatosPersonales">
        
      <label for="find">Producto: </label>
      <input type="text" name="product" onChange={this.handleChange} /> <button type="button" for="agregar">Agregar</button>
            
          </form><br/><br/><br/>
    
        <table id="customers">
            <tr>
                <th>Código</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Valor Unitario</th>
                <th>Valor total</th>
                <th type="date" name="fecha_pedido" >Fecha del pedido</th>
                <th  width="10">Responsable</th>
            </tr>
            <form className="form-tb">

            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" placeholder="Nombre del cliente"/>  <label for="apellidos">Apellidos</label>
            <input type="text" name="apellidos" id="apellidos" placeholder="Apellido"/>
            <label size="40">Documento:</label>
            
            <br />
            <label for="nombre">Teléfono</label> <input type="text" name="telefono" id="telefono" placeholder="teléfono"/>
            <br/> 
            
          </form >
          
            <tr>
                <td> <input type="text" name="nombre" id="nombre" size="10" placeholder="Cod."/> </td>
                <td> <input type="text" name="nombre" id="nombre" placeholder="producto"/> </td>
                <td> <input type="text" name="nombre" id="nombre" placeholder="Cantidad"/> </td>
                <td><input type="text" name="nombre" id="nombre" placeholder="Valor unit"/></td>
                <td><input type="text" name="nombre" id="nombre" placeholder="valor total" disabled/ ></td>
                <td><input type="date" name="nombre" id="nombre" /></td>
                <td><input type="text" name="nombre" id="nombre" placeholder="Vendedor"/> </td>
            </tr>
            <tr>
                <td> <input type="text" name="nombre" id="nombre" size="10" placeholder="Cod."/> </td>
                <td> <input type="text" name="nombre" id="nombre" placeholder="producto"/> </td>
                <td> <input type="text" name="nombre" id="nombre" placeholder="Cantidad"/> </td>
                <td><input type="text" name="nombre" id="nombre" placeholder="Valor unit"/></td>
                <td><input type="text" name="nombre" id="nombre" placeholder="valor total" disabled/></td>
                <td><input type="date" name="nombre" id="nombre" /></td>
                <td><input type="text" name="nombre" id="nombre" placeholder="Vendedor"/> </td>
            </tr>
            <tr>
                <td> <input type="text" name="nombre" id="nombre" size="10" placeholder="Cod."/> </td>
                <td> <input type="text" name="producto" id="producto" placeholder="producto"/> </td>
                <td> <input type="text" name="cant" id="cant" placeholder="Cantidad"/> </td>
                <td><input type="text" name="valunit" id="valunit" placeholder="Valor unit"/></td>
                <td><input type="text" name="date" id="nombre" placeholder="valor total" disabled/></td>
                <td><input type="date" name="fecha" id="fecha" /></td>
                <td><input type="text" name="nombre" id="nombre" placeholder="Vendedor"/> </td>
            </tr>
          
      </table>
      
    
        <br /><br />
        <button type="button" onClick="mostrar()">Crear pedido</button>  
  
      </div>
      
    );
  }
}
export default RegistrarVentas;

