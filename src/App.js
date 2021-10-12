import React from 'react';
import './App.css';

import {Home} from './components/home/Home.jsx';
import {prueba} from './components/prueba/prueba.jsx';
import {Login} from './components/login/Login.jsx';
import { Users } from './components/users/Users.jsx';
import { Navigator } from './components/shared/navbar/Navigator.jsx';
import { Ventas } from './components/ventas/Ventas.jsx';
import { Vendedores } from './components/vendedores/Vendedores.jsx';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">

        <h3 className='m-3 d-flex justify-content-center'>
          Plataforma de Ventas - Sistema G-8 
        </h3>
        <Navigator/>

        <Switch>         
          <Route path='/' component={Home} exact />
          <Route path='/prueba' component={prueba}/>
          <Route path='/users' component={Users}/>
          <Route path='/sales' component={Ventas}/>
          <Route path='/salesman' component={Vendedores}/>
        </Switch>

      </div>
    </BrowserRouter>
  );
}
   

export default App;