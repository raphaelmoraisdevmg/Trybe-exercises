import React from 'react';

class Infos extends React.Component{
    render(){
        return(
            <div>
                <h1>Informações pessoais</h1>
                <p>Nome:</p>
                <p>E-mail: </p>
                <p>Cpf: </p>
                <p>Endereco: </p>
                <p>Cidade: </p>
                <p>Estado: </p>
                <p>Tipo: </p>
                <hr />
                <p></p>
                <h1>Experiência</h1>
                <p>Resumo: </p>
                <p>Cargo:</p>
                <p>Descrição:</p>
            </div>
            
        );
    }
}

export default Infos;