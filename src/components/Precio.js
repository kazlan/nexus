import React from 'react';

const Precio = ({modelo, config})=>{
  const precio = Object.keys(config).reduce((acc,pieza)=> {
    return acc + parseInt(modelo[pieza].filter(item => item.id === config[pieza])[0].precio,10)
  },0) + "€"
  return <h4> Precio: {precio}</h4>
}

export default Precio;