import React from 'react';
import '../index.css';
import Table from './Statlist';
import Description from './Description';
import pika from '../images/pikachu.png';
import ditto from '../images/Ditto.png';

class Content extends React.Component {
    state = {
        val: '',
        id: '',
        error: ''
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    handleClick = () => {
        this.setState({
            error:''
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.props.pokemon.includes(e.currentTarget.querySelector('input').value)){
            this.props.searchFnc(this.state.val);
        }else{
            this.setState({
                error: <div className='big-error'>
                    <div><img alt={ditto} src={ditto}/></div>
                    <h2>Enter correct Pokemon name!</h2>
                    <button onClick={this.handleClick} className="form-btn">BACK</button>
                    </div>
            })
        }
        e.currentTarget.querySelector('input').value = '';
    }


    render() {
        
            return (
                <>
                {this.state.error}
                <div style={{display:'flex',
                    flexDirection:'column',
                    height: `100vh`,
                    padding:`30px 0`}}>
                    <div style={{display:'flex', justifyContent:'space-around', alignItems: 'center'}}>
                    <span className='name'>{this.capitalizeFirstLetter(this.props.name)}</span>
                    <form onSubmit={this.handleSubmit} className="form">
                        <label htmlFor="name">Enter Pokemon name:</label>
                        <input type="text" id="name" className="form-input" style={{color:'black'}} onChange={e => this.setState({val: e.target.value})} />
                        <button type="submit" className="form-btn">Search</button>
                    </form>
                    </div>
                    <div className='container mt-2 mb-2'>
                        <div style={{width:'40%'}}>
                            <Table pokeData={this.props.pokeData}/>
                        </div>
                        <div style={{width:'25%'}}>
                        {
                            
                            this.props.img
                                ? <img style={{width:'100%'}} src={this.props.img } alt='poke'/>
                                : <div className='loader'><img src={pika} alt='pika'/></div>
                        }
                            
                        </div>
                    </div>
                    <Description pokeEvo={this.props.pokeEvo} pokeData={this.props.pokeData}/>
                 </div>
                 </>
            )
        
    }    
    
}

export default Content;