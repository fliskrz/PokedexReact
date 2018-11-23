import React from "react";
import logo from '../images/logo.png';
import '../index.css';
import ditto from '../images/Ditto.png';

class Header2 extends React.Component {
        
    state = {
        val: '',
        id: '',
        error:''
    }
    handleClick = (e) => {
        window.location.reload();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.props.pokemon.includes(e.currentTarget.querySelector('input').value.toLowerCase())){
            this.props.searchFnc(this.state.val);
        }else{
            this.setState({
                error: <div className='error'>
                    <div><img alt={ditto} src={ditto}/></div>
                    <h2>Enter correct Pokemon name!</h2>
                    <button onClick={this.handleClick} className="form-btn">BACK</button>
                    </div>
            })
        }
        e.currentTarget.parentElement.parentElement.classList.add('hidden');
        e.currentTarget.querySelector('input').value = '';
    }

    render() {
        return (
            <>
            <header  className='main-header'>
                <div className='header' style={{background: `rgba(0,0,0,0.7)`}}>
                    <div className='img'>
                        <img src={logo} alt='logo'/>
                    </div>
                    <form onSubmit={this.handleSubmit} className="form">
                        <label htmlFor="name">Enter Pokemon name:</label>
                        <input type="text" id="name" className="form-input" onChange={e => this.setState({val: e.target.value})} />
                        <button type="submit" className="form-btn">Search</button>
                    </form>
                </div>
            </header>
            {this.state.error}
            </>
        )
    }
}

export default Header2;