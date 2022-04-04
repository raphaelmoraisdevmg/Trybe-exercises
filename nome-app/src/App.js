import './App.css';
import React from 'react';

class App extends React.Component {
  render(){
    const todos = ['aula ao vivo','exercicios','monitoria','fechamento','lixo para fora'];
    return (
      <div>
        <h1>Lista de tarefas</h1>
        <ol>
          <li>Aprender React</li>
          <li>Lavar a louça</li>
          <li>Colocar o lixo para fora</li>
        </ol>
        <h1>Compromissos do dia</h1>
        <ul>
        {todos.map((todo)=>{
          return <li>{todo}</li>
        })}
        </ul>
        
      </div>
    );
  }
  
}

export default App;
