import React from 'react';
import { Table, TableBody } from 'mdbreact';


class BasicTable extends React.Component {
    state = {
        
    }

    render(){
        if(this.props.pokeData.stats){
        return (
            <Table style={{width:'50%'}} striped>
            <TableBody>
            <tr>
                <td>HP</td>
                <td>{this.props.pokeData.stats[5].base_stat}</td>
                </tr>
                <tr>
                <td>Attack</td>
                <td>{this.props.pokeData.stats[4].base_stat}</td>
                </tr>
                <tr>
                <td>Defense</td>
                <td>{this.props.pokeData.stats[3].base_stat}</td>
                </tr>
                <tr>
                <td>Speed</td>
                <td>{this.props.pokeData.stats[0].base_stat}</td>
                </tr>
                <tr>
                <td>Special Attack</td>
                <td>{this.props.pokeData.stats[2].base_stat}</td>
                </tr>
                <tr>
                <td>Special Defense</td>
                <td>{this.props.pokeData.stats[1].base_stat}</td>
                </tr>
            </TableBody>
            </Table>
            )   
        
        }else{return null}
        
        
    }

}
export default BasicTable;