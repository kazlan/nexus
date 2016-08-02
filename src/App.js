import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'

import Formulario from './components/Formulario'
import ImageStack from './components/ImageStack' 
import Precio from './components/Precio'

import { localStorageSave, localStorageLoad } from './actions'

import './App.css';

class App extends Component {

  componentWillReceiveProps(nextProps) {
    console.log('willReceive', nextProps.imagenes)
    const { dispatch } = this.props
    dispatch(localStorageSave(nextProps.config))
  }
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(localStorageLoad()) 
  }
  
  render() {
    const {imagenes, config, piezas} = this.props
    return (
      <Grid fluid className="App">
        <Row className="App-header">
          <h2> Nexus Customizer - Prueba de concepto</h2>
        </Row>
        <Row className="content"> 
          <Col className="controls" md={4}>
            <Formulario /> {/* pasarle piezas como prop y estupidizar component */}
            <Precio modelo={piezas} config={config} />
          </Col>
          <Col className="canvas-frame" md={8}>
            <div id="marquee">
              <ImageStack imagenes={imagenes}/>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default connect(state=>state)(App);
