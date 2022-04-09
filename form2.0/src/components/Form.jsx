import React from "react";
import Input from './Input'
class Form extends React.Component{
    constructor(){
        super();
        this.setState ={
            key:"",
            value:"",
        }
    }
    handleChange = (event) =>{
        const key = event.target;
        const value= event.target.value
        this.setState({
            key:{}
        })
    }
    render(){
        return(
            <div>
                <h1>Entre com suas informações</h1>
                <fieldset>
                <label htmlFor="">
                    Nome:
                <Input 
                   type="text" 
                   name="name"
                />
                </label>
                <label htmlFor="">
                    E-mail
                <Input 
                   type="email" 
                   name="email"
                />
                </label>
                <label htmlFor="">
                    Cpf:
                <Input 
                   type="text" 
                   name="cpf"
                />
                </label>
                 <label htmlFor="">
                    Endereço:
                <Input 
                   type="text" 
                   name="adress"
                />
                </label>
                <label htmlFor="">
                    Cidade:
                <Input 
                   type="text" 
                   name="city"

                />
                </label>
                <label htmlFor="">
                    Estado:
                <Input 
                   type="text" 
                   name="state"

                />
                </label>
                <label htmlFor="">
                    Tipo:
                <Input 
                   type="text" 
                   name="type"

                />
                </label>
                <hr />
                <label htmlFor="">
                    Resumo:
                <Input 
                   type="text" 
                   name="resume"

                />
                </label>
                <label htmlFor="">
                    Cargo:
                <Input 
                   type="text" 
                   name="job" 
                />
                </label>
                <label htmlFor="">
                    Descrição:
                <Input 
                   type="text"
                   name="description" 
                />
                </label>
                <button>Enviar</button>
                </fieldset>
                
                
            </div>
        );
    }
}

export default Form;