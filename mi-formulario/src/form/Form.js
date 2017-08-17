import React, { Component } from 'react'
import FormRow from './FormRow'
import './Form.css'

class Form extends Component {
  constructor(){
    super();
    this.state = {
      labelLegend: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e){
    e.preventDefault();

    let nombre = this.refs.nombre.getValue();
    let apellido = this.refs.apellidos.getValue();
    let email = this.refs.correo.getValue();
    let pwd = this.refs.password.getValue();
    let conf_pwd = this.refs.confirm_password.getValue();

    if (pwd === conf_pwd) {
      this.setState({ labelLegend: 'Logeado exitosamente'});
    }else {
      alert("Passwords no coinciden, intenta de nuevo");
    }
  }
  render(){
    return(
      <div className="Form">
        <form onSubmit={ this.onSubmit } className="Form-form">
          <h2 className="Form-title">Registro</h2>
          <FormRow
            inputType="text"
            labelText="Nombre"
            ref="nombre"
            isRequired={true}/>

          <FormRow
            inputType="text"
            labelText="Apellidos"
            ref="apellidos"
            isRequired={true}/>

          <FormRow
            inputType="email"
            labelText="Correo electronico"
            ref="correo"
            isRequired={true}/>

          <FormRow
            inputType="password"
            labelText="Password"
            ref="password"
            isRequired={true}/>

          <FormRow
            inputType="password"
            labelText="Confirmar password"
            ref="confirm_password"
            isRequired={true}/>

          <button className="Form-button">Registro</button>
          <label className="Form-labelLegend">{ this.state.labelLegend }</label>
        </form>
      </div>
    );
  }
}

export default Form;
