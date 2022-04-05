import React  from "react";

class Pokemon extends React.Component{
    render(){
        const  {name,type,weigh,src} = this.props
        return(
            <div>
                <h1>{name}</h1>
                <p>{type}</p>
                <p>{weigh}</p>
                <img src={src} alt={name} />
            </div>
        );
    }
}
export default Pokemon