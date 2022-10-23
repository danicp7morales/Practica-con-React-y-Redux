import React, { Component } from 'react';
import { connect } from 'react-redux';

import {buy_pokemon_action, return_pokemon_action} from '../redux/actions/gameShowAction'



class CompraPokemons extends Component {
    render() {
        return (
            <div>
              
              <button className="btn btn-primary" onClick={() =>{
                this.props.buy_pokemon_action(1);
              }}>Comprar Pokemon </button>
              <button className="btn btn-secondary" onClick={() =>{
                this.props.return_pokemon_action(1);
            }}>Regresar Pokemon </button>
            </div>
        )
    }
}

const mapDispatchToProps = {
  buy_pokemon_action,
  return_pokemon_action
};

export default connect(null, mapDispatchToProps)(CompraPokemons) 