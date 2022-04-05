import React  from "react";
import Pokemon from "./Pokemon";
import Data from "./Data";

class Pokedex extends React.Component{
    render(){
        return(
            <div>
                { Data.map((pokemon) =>
                <Pokemon 
                name={pokemon.name}
                type={pokemon.type}
                weigh={`peso: ${pokemon.averageWeight.value}${pokemon.averageWeight.measurementUnit}`}
                src={pokemon.image}    
                />)}
            </div>
        );
    }
}
export default Pokedex