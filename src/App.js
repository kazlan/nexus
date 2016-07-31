import React from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'

import Formulario from './components/Formulario'
import ImageStack from './components/ImageStack' 
import Precio from './components/Precio'

import './App.css';



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

export default connect(state=>state)(App);
