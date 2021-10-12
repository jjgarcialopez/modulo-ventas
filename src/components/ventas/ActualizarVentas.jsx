import React, { Fragment } from "react";


function ActualizarVentas(){
  return(
    <div className="container">
    <h1 align="center">Actualizar Ventas</h1>
    
	 
        <table class="table table-sm">
                        <thead>
                          <tr>
                            <th scope="col">Número de orden</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Valor Total</th>
                            <th scope="col">Estado pago</th>
                            <th scope="col">Estado envio</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"> <input type="text" name="nombre" id="nombre" placeholder="1492" disabled/ ></th>
                            <td>5</td>
                            <td>Lapiz Hb2</td>
                            <td>2500</td>
                            <td>PAGO PSE</td>
                            <td>ENVIADO</td>
                            <button>Editar pedido</button>
                            
                          </tr>
                          <tr>
                            <th scope="row"> <input type="text" name="nombre" id="nombre" placeholder="1493" disabled/ ></th>
                            <td>5</td>
                            <td>Cuaderno 100 Hojas</td>
                            <td>12000</td>
                            <td>PAGADO EN EFECTIVO</td>
                            <td>PENDIENTE</td>
                            <button>Editar pedido</button>
                            
                          </tr>
                          <tr>
                            <th scope="row"> <input type="text" name="nombre" id="nombre" placeholder=" 1494" disabled/ ></th>
                            <td>5</td>
                            <td>Carpeta Oficio</td>
                            <td>2500</td>
                            <td>PENDIENTE</td>
                            <td>EN ESPERA</td>
                            <button>Editar pedido</button>
                            
                          </tr>
                        </tbody>
       </table>
       <button type="button" class="btn btn-secondary">Guardar</button>&nbsp; <button type="button" class="btn btn-secondary">Cancelar</button>
    </div>
  )
}

export default  ActualizarVentas;
