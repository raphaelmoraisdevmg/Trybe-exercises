import React  from "react";
import PropTypes from 'prop-types';

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
Pokemon.protoType ={
    name:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    wheigh:PropTypes.string.isRequired,
    src:PropTypes.string.isRequired,
};
export default Pokemon