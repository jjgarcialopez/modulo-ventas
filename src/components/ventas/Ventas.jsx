import React, { Component } from "react";

import ActualizarVentas from "./ActualizarVentas";
import { BuscarVentas } from "./BuscarVentas";
import { ListarVentas } from "./ListarVentas";
import { RegistrarVentas } from "./RegistrarVentas";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

export class Ventas extends Component {
  render() {
    return (
      <BrowserRouter>
        <br />
        <div className="container-fluid">
           <br />

          <div className="row">
            
            <div className="col-md-1 m-0 p-0">


              <div className="row m-0 p-1">
                <Link to="/registrarVentas" className="btn btn-secondary">
                  Registrar Ventas
                </Link>
              </div>

              <div className="row m-0 p-1">
                <Link to="/listarVentas" className="btn btn-secondary">
                  Listar Ventas
                </Link>
              </div>

              <div className="row m-0 p-1">
                <Link to="/buscarVentas" className="btn btn-secondary">
                  Buscar Ventas
                </Link>
              </div>

              <div className="row m-0 p-1">
                <Link to="/actualizarVentas" className="btn btn-secondary">
                  Actualizar Ventas
                </Link>
              </div>

              
            </div>



            <div className="col-md-11 m-0 p-0">
              <Switch>
                <Route path="/registrarVentas" exact>
                  <RegistrarVentas />
                </Route>
                <Route path="/buscarVentas" exact>
                  <BuscarVentas />
                </Route>
                <Route path="/listarVentas" exact>
                  <ListarVentas />
                </Route>
                <Route path="/actualizarVentas" exact>
                  <ActualizarVentas />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
