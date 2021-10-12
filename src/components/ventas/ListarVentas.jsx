import React, { Component } from "react";

export class ListarVentas extends Component {
  render() {
    return (
      <div className="container">
         <h2 align="center">Listado de pedidos:</h2>
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
                            
                          </tr>
                          <tr>
                            <th scope="row"> <input type="text" name="nombre" id="nombre" placeholder="1493" disabled/ ></th>
                            <td>5</td>
                            <td>Cuaderno 100 Hojas</td>
                            <td>12000</td>
                            <td>PAGADO EN EFECTIVO</td>
                            <td>PENDIENTE</td>
                            
                          </tr>
                          <tr>
                            <th scope="row"> <input type="text" name="nombre" id="nombre" placeholder=" 1494" disabled/ ></th>
                            <td>5</td>
                            <td>Carpeta Oficio</td>
                            <td>2500</td>
                            <td>PENDIENTE</td>
                            <td>EN ESPERA</td>
                            
                          </tr>
                        </tbody>
                      </table>
      </div>
    );
  }
}
