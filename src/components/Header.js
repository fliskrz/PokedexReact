import React from "react";
import logo from '../images/logo.png';
import '../index.css';

class Header extends React.Component {
        
    state = {
        val: '',
        id: ''
    }


  

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchFnc(this.state.val);
    }

    render() {
        return (
            <header className='header' style={{height:'100vh', alignItems:'center'}}>
              
                  <div className='img'>
                      <img src={logo} alt='logo'/>
                  </div>
                  <form onSubmit={this.handleSubmit} className="form">
                      <label htmlFor="name">Enter Pokemon name:</label>
                      <input type="text" id="name" placeholder=" Wpisz nazwę poka" className="form-input" onChange={e => this.setState({val: e.target.value})} />
                      <button type="submit" className="form-btn">Search</button>
                  </form>
                
            </header>
        )
    }


}

export default Header;