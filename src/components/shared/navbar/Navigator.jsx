import React, {Component} from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import {Navbar, Nav} from 'react-bootstrap';

export class Navigator extends Component{
    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink className='d-inline p-2 bg-dark text-white'
                        to="/">Home</NavLink>
                        <NavLink className='d-inline p-2 bg-dark text-white'
                        to="/login">Iniciar de Sesión</NavLink>
                        <NavLink className='d-inline p-2 bg-dark text-white'
                        to="/users">Gestión de Usuarios</NavLink>
                        <NavLink className='d-inline p-2 bg-dark text-white'
                        to="/salesman">Gestión de Vendedores</NavLink>
                        <NavLink className='d-inline p-2 bg-dark text-white'
                        to="/sales">Gestión de Ventas</NavLink>                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}