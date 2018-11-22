import React from 'react';
import axios from 'axios';
import Header2 from './Header2';
import '../index.css';
import Content from './Content';
import * as firebase from 'firebase';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokeName:null,
            pokeData:'',
            pokeEvo:'',
            pokemon: [],
            image: ''
        }
        this.pokeNames = (() =>
        axios.get(`https://pokeapi.co/api/v2/pokemon/`)
        .then((res) => {
            this.setState({
                pokemon: res.data.results.map(e => e.name)
            })
        }))()
    }

    
    

    getData = (text) => {
        
        this.setState({
            pokeName: text.toLowerCase(),
            image:''
        })

        axios.get(`https://pokeapi.co/api/v2/pokemon/${text.toLowerCase()}/`)
        .then((res) => {
            this.setState({
                pokeData: res.data
            })
        })

        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${text.toLowerCase()}/`)
        .then((res) => {
            return axios.get(res.data.evolution_chain.url)
        })
        .then((data) => {
            this.setState({
                pokeEvo: data.data
            })
        })
        
        var storage = firebase.storage();
        var pathReference = storage.ref(`images/${text.toLowerCase()}.png`)
            .getDownloadURL()
            .then((url) => {
                this.setState({
                    image: url
                })
            });
    }


    render() {
        
        if(this.state.pokemon.includes(this.state.pokeName)){
            return (
                <>
                    <Header2 pokemon={this.state.pokemon} searchFnc={this.getData}/>
                    <Content pokemon={this.state.pokemon} img={this.state.image} searchFnc={this.getData} pokeEvo={this.state.pokeEvo} pokeData={this.state.pokeData} name={this.state.pokeName}/>
                </>
            )
        }else{
            return(
                
                    <Header2 pokemon={this.state.pokemon} style={{minHeight:'100%'}} searchFnc={this.getData}/>
                
            )
        }
    }
}

export default App;

