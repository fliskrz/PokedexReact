import React from 'react';
import '../index.css';



// {this.props.pokeEvo.chain.species.name},{this.props.pokeEvo.chain.evolves_to[0].species.name}, {this.props.pokeEvo.chain.evolves_to[0].evolves_to[0].species.name}

class Description extends React.Component {
    
    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    render() {

        if(this.props.pokeEvo && this.props.pokeData){

            let evo = null;
            if(this.props.pokeEvo.chain.evolves_to.length === 0){
                evo = `Doesn't evolve from or into any known pokemon.`
            }else{
                evo = `${this.capitalize(this.props.pokeEvo.chain.species.name)} > ${this.capitalize(this.props.pokeEvo.chain.evolves_to[0].species.name)}`;
                if(this.props.pokeEvo.chain.evolves_to[0].evolves_to.length>0){
                    evo = `${evo} > ${this.capitalize(this.props.pokeEvo.chain.evolves_to[0].evolves_to[0].species.name)}`
                }
            }

            let types = this.props.pokeData.types.map(e => e.type.name).join(' / ')

            return (
                
                <div style={{display:'flex',alignItems:'center', flexDirection:'column'}}>
                    <span>Evolution chain: {evo}</span>
                    <span>Types: {types} </span>
                </div>
                
            )
        }else{return null}
    }
}

export default Description;