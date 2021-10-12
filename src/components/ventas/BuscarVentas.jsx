import React, { Component } from "react";

export class BuscarVentas extends Component {
  render() {
    return (
      <div className="container">
        <h1 align="center"> Buscar Ventas</h1>
        <form className="form">
        <label for="nombre">Pedido:</label>
<input type="text" name="numorden" id="nombre" placeholder="."/> 
<label for="nombre">Nombre</label>
<input type="text" name="nombre" id="nombre" placeholder="Nombre del cliente"/>  <label for="apellidos">Apellidos</label>
<input type="text" name="apellidos" id="apellidos" placeholder="Apellido"/>
<br/>
<label size="40">Documento:< /label>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <select name="id" id="id">
&nbsp;<option value="volvo">Cedula</option>
<option value="">Nit</option>
<option value="">Pasaporte</option>
<option value="">Otros</option>
</select>&nbsp;<input type="text" name="id-cliente" id="id-cliente"placeholder="Nro Documento" />
<br />
<label for="fechadesde">Desde</label><input type="date" name="fecha" id="fechahasta" /><label for="nombre">Hasta</label><input type="date" name="fecha" id="fechahasta" />
<br/> <br/>
<center><button type="submit" align="center">
CONSULTAR
</button></center>

</form>

<br />   
      </div>
    );
  }
}
