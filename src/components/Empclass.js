import React from "react";

export default class Empclass extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            name:'',
            salario:'',
            nht:''
        })
        this.handleInputChange = this.handleInputChange.bind(this)  
        this.sendData= this.sendData.bind(this)
      }
    // metodo para capturar la informacion digitada en los input

    handleInputChange(event){
       // console.log(event.target.value)
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    sendData(event){
        event.preventDefault();
        console.log(this.state.salario/240*this.state.nht)
    }
render(){
  return(
    <div  className="container">
      <h1>formulario de pago</h1>
      <form onSubmit={this.sendData}>
      <div class="mb-3">
          <div className="col-6">
            <label>Nombre</label>
            <input type="text" className="form-control" name="name" onChange={this.handleInputChange} ></input> 
          </div>
        </div>
        <div class="mb-3">
          <div className="col-6">
            <label>salario</label>
            <input type="text" className="form-control" name="salario" onChange={this.handleInputChange} ></input> 
          </div>
        </div> 
        <div class="mb-3">
          <div className="col-6">
            <label>Horas trabajadas</label>
            <input type="text" className="form-control" name="nht" onChange={this.handleInputChange} ></input> 
          </div>
        </div>
        <div class="mb-3">
          <div className="col-6">
            <label>Total a pagar</label>
            <input type="text" className="form-control" readOnly Value={this.state.salario/240 * this.state.nht} ></input> 
          </div>
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-success">Enviar</button>
          </div>  
      </form>

    </div>

  );
}
}

