import React from 'react'
import './App.css';
import ImageStack from './components/ImageStack'
import {Grid, Row, Col} from 'react-bootstrap'
import Formulario from './components/Formulario'
import {connect} from 'react-redux'

const  mapStateToProps = (state)=>{
    console.log("new state: ", state)
    return state
}

const App=({imagenes,config,piezas})=> (
  <Grid fluid className="App">
    <Row className="App-header">
      <h2> Nexus Customizer - Prueba de concepto</h2>
    </Row>
    <Row className="content"> 
      <Col className="controls" md={4}>
        <Formulario /> {/* pasarle piezas como prop y estupidizar component */}
        <Precio modelo={piezas} config={config}/>
      </Col>
      <Col className="canvas-frame" md={8}>
        <div id="marquee">
          <ImageStack imagenes={imagenes}/>
        </div>
      </Col>
    </Row>
  </Grid>
)
const Precio = ({modelo, config})=>{
  const precio = Object.keys(config).reduce((acc,pieza)=> {
    return acc + parseInt(modelo[pieza].filter(item => item.id === config[pieza])[0].precio,10)
  },0) + "€"
  return <Row> <h4> Precio: {precio}</h4> </Row>
}

export default connect(mapStateToProps)(App);
