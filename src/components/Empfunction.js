import React, { useState } from "react";

export default function Empfunction(props){
    //estados

    const [dataform, setData] = useState({
        name:'',
        salary:'',
        nht:'',

    })
    //metodo
     const handleInputChange = (event) => {
         console.log(event.target.value);
         setData({
             ...dataform,
             [event.target.name]:event.target.value
         })
     } 

     const onSubmit= (e) =>{
         e.preventDefault();
         setData({
             ...dataform,
             [e.target.name]:e.target.value
         })
     }

    return(
        <div className ="container" >
            <h1 style={{color:'red', backgroundColor:'pink'}}>liquidacion de nomina</h1>

            <form  onSubmit={onSubmit}>
      <div class="mb-3">
          <div className="col-6">
            <label>Nombre</label>
            <input type="text" className="form-control" name="name" onChange={handleInputChange} ></input> 
          </div>
        </div>
        <div class="mb-3">
          <div className="col-6">
            <label>salario</label>
            <input type="text" className="form-control" name="salario"  onChange={handleInputChange} ></input> 
          </div>
        </div> 
        <div class="mb-3">
          <div className="col-6">
            <label>Horas trabajadas</label>
            <input type="text" className="form-control" name="nht"  onChange={handleInputChange}></input> 
          </div>
        </div>
        <div class="mb-3">
          <div className="col-6">
            <label>Total a pagar</label>
            <input type="text" className="form-control" readOnly value={dataform.salary/240*dataform.nht} ></input> 
          </div>
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-success">Enviar</button>
          </div>  
      </form>

        </div>

    );
}