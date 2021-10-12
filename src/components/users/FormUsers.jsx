import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class FormUsers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idUsuario: '',
            identificacion: '',
            nombre: '',
            email: '',
            user_password: '',
            funcionario_estado: true,
        };
        if (this.props.usuario) {
            let result = this.props.usuario;
            this.state = {
                idUsuario: result.idUsuario,
                identificacion: result.identificacion,
                nombre: result.nombre,
                email: result.email,
                password: '',                
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeBooleano = this.handleChangeBooleano.bind(this);
        this.guardarFormularioUsuario = this.guardarFormularioUsuario.bind(this);
        this.renderDependencias = this.renderDependencias.bind(this);
        this.renderCargos = this.renderCargos.bind(this);
        this.buscarProfesional = this.buscarProfesional.bind(this);

    }

	componentDidMount() {

    }
   

	unmountComponent(evt) {
        evt.preventDefault();
        ReactDOM.unmountComponentAtNode(document.getElementById('dialogo_busqueda_formulario'));
    }

    handleChange(e) {
              
    }
    
    guardarFormularioUsuario(evt) {
        evt.preventDefault();    
    }

    render() {
        return (
            <div className="dialogo_cover ">
                <div className="dialogo_actualizacion box_container">
                    <form id="form_estado_salud_ingreso_beneficiario"
                          className="form form--horizontal form--actualizacion form--no-uppercase"
                          onSubmit={(evt) => {
                              evt.preventDefault();
                          }}>
                        <h1 className="form-titulo">Formulario de usuario funcionario</h1>

                        <div className="form-grupo">
                            <fieldset className="fieldset fieldset--h">
                                <div className="input_group input_group--2">
                                    <label htmlFor="identificacion">Identificación</label>
                                    <input id="identificacion" type="text" className="input"
                                            name="identificacion"
                                            value={this.state.identificacion}
                                            onChange={this.handleChange}/>
                                </div>
                                <div className="input_group input_group--2">
                                    <label htmlFor="nombre">Nombre de Usuario</label>
                                    <input id="nombre" type="text" className="input"
                                            name="nombre"
                                            value={this.state.nombre}
                                            onChange={this.handleChange}/>
                                </div>
                            </fieldset>
                            <fieldset className="fieldset fieldset--h">
                                <div className="input_group input_group--3">
                                    <label htmlFor="email">Correo electronico</label>
                                    <input id="email" type="email" className="input"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.handleChange}/>
                                </div>
                                <div className="input_group input_group--3">
                                    <label htmlFor="password">Contraseña de usuario</label>
                                    <input id="password" type="password" className="input"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.handleChange}/>
                                </div>                                
                            </fieldset>
                        </div>
                    </form>
                    <div className="botones">
                        <button id="form_realizar_registro-submit" type="submit"
                                className="btn btn--submit"
                                ref={(btn) => {
                                    this.btnSubmitCargarUsuario = btn
                                }} onClick={this.guardarFormularioUsuario}>Guardar
                        </button>
                        <button id="form_realizar_cobertura_afiliacion-cerrar" className="btn btn--cancelar"
                                onClick={this.unmountComponent}>Cerrar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}

FormUsers.propTypes = {
    idUsuario: PropTypes.string,
    usuario: PropTypes.object,
}

export default FormUsers;
