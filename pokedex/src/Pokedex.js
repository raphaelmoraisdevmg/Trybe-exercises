import React  from "react";
import Pokemon from "./Pokemon";
import Data from "./Data";

class Pokedex extends React.Component{
    render(){
        return(
            <div>
                <Pokemon />
            </div>
        );
    }
}
export default Pokedex