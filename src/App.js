
import './App.css';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import CantidadPokemonHook from './components/CantidadPokemonHook';
import CompraPokemonHook from './components/CompraPokemonHook';

import store from './redux/store';
import BuscadorPokemon from './components/Buscador/BuscadorPokemon';
import ResultadoPokemon from './components/Buscador/ResultadoPokemon';


import { Provider} from 'react-redux';


function App() {

 //console.log(store.getState())
return (   
    <Provider  store = {store}>
    <div className="App container">
      <div className='row'>
        <div className='col-12'>
        
          <div className='card mt-5' style={{maxWidth: '500px'}}>
            <div className='row no-gutters'>

              <div className='col-4'>
                <img src={require('./img/pokemon.jpg')}  alt='foto pokemon' className='card-img' />
              </div>
              <div className='col-8'>
                <div className='card-body'>
                  <div className='card-title h3 text-center'>
                   
                    <CantidadPokemonHook/>


                  </div>
                    <CompraPokemonHook/>
                </div>

              </div>

            </div>
          </div>
        </div>
        <div className='col-2 mt-4 border-top pt-3'><BuscadorPokemon/></div>
        <div className='col-12 '><ResultadoPokemon/></div>  
           
      </div>
          
     
          
    </div>
     
          
    </Provider>
  )
}

export default App;
