import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Table, Button } from 'react-bootstrap';
import FormUsers from './FormUsers';

// import AccionesUsers from './AccionesUser.jsx';


export class Users extends Component{

    constructor(props){
        super(props);
        this.state = {
            usuarios:[]
        }
        this.handleClickEditarUser = this.handleClickEditarUser.bind(this);
    };

    

    handleClickEditarUser(evt){
        evt.preventDefault();
        evt.stopPropagation();
        let idUsuario = evt.currentTarget.dataset.idUsuario;
        ReactDOM.render(
            <FormUsers idUsuario={idUsuario} />,
            document.getElementById('form_dialogo')
        );
    }

    componentDidMount(){
        this.refreshList();
    }

    refreshList(){
        this.setState({
            usuarios:[{"idUsuario":1,"identificacion":"123","nombre":"Usuaro 1","email":"usuario1@gmail.com"},
            {"idUsuario":2,"identificacion":"456","nombre":"Usuaro 2","email":"usuario2@gmail.com"},
            {"idUsuario":3,"identificacion":"789","nombre":"Usuaro 3","email":"usuario3@gmail.com"},
            {"idUsuario":4,"identificacion":"901","nombre":"Usuaro 4","email":"usuario4@gmail.com"},            
        ]
        })
    }

    render(){
        const {usuarios} = this.state;
        return(
            <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Acción</th>
                        <th>ID Usuario</th>
                        <th>Identificacion</th>
                        <th>Nombre</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario=>
                        <tr key = {usuario.idUsuario}>
                            <td>
                                <Button variant="Secondary">Editar</Button>{' '}
                                <Button variant="Secondary">Inactivar</Button> 
                            </td>                               
                            <td> {usuario.idUsuario}</td>
                            <td> {usuario.identificacion}</td>
                            <td> {usuario.nombre}</td>
                            <td> {usuario.email}</td>
                        </tr>                        
                    )}  
                    <span>
                        <Table >
                            <Button variant="Dark" onClick={this.handleClickEditarUser}>Nuevo</Button>{' '}                
                        </Table>                            
                    </span>                    
                </tbody>
            </Table>   
        )
    }
                            
}