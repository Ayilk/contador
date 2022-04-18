import esfera from './imagenes/esfera.jpg'
import Boton from './componentes/Boton'
import Contador from './componentes/Contador';
import { useState } from 'react';
import './App.css';

function App() {
  
  const [ numClics, setNumClics ] = useState(0);

  

  const handleClick = (e) => {
      setNumClics( numClics + 1 )
  };

  const handleReset = () => {
    setNumClics ( numClics - 1 )
  }
  
  const reiniciarContador = () => {
      setNumClics(0);
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          className='logo'
          src={esfera}
          alt="Logo"
          />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
            texto='+'
            click={true}
            handleClick={handleClick} />
         <Boton 
            texto='-'
            click={true}
            handleClick={handleReset} />   
        <Boton 
            texto='Reiniciar contador'
            click={false}
            handleClick={reiniciarContador} />
      </div>
      
    </div>
  );
}

export default App;
