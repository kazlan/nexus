import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Row, Col} from 'react-bootstrap'

import Formulario from './Formulario'
import ImageStack from './ImageStack' 
import Precio from './Precio'

import { localStorageSave, localStorageLoad } from '../actions'
import { decodeRouteParam, encodeRouteParam } from '../actions'

import './configurator.css';

class Configurator extends Component {

  componentWillReceiveProps(nextProps) {
    const { dispatch } = this.props
    if (localStorage !== undefined){
      dispatch(localStorageSave(nextProps.config))
    }
    // realmente hemos recibido el estado nuevo pero no cambiado
    // el configStr, de hecho es lo que queremos saber si hemos de cambiar
    // si new State != old state entonces codifica
    if (!Object.is(this.props.config, nextProps.config)){
      dispatch(encodeRouteParam(nextProps.config))
    }
  }
  componentDidMount() {
    const { dispatch } = this.props
    const { configStr } = this.props.params
    //Primero mira si hay config en la ruta
    // si no la hay la crea
    if (configStr !== undefined){
      dispatch(decodeRouteParam(configStr))
    }else{
          // Mira si hay que cargar config de localStorage
      if (localStorage !== undefined){
        dispatch(localStorageLoad()) 
      }
      dispatch(encodeRouteParam(this.props.config))
    }

  }
  
  render() {
    const {imagenes, config, piezas} = this.props
    return (
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
    );
  }
}
export default connect(state=>state)(Configurator);
