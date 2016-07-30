import React, { Component } from 'react'
import './App.css';
import ImageStack from './components/ImageStack'
import {Grid, Row, Col, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      imagenes: {
        bota: "botaRoja.png",
        guia: "guiaAzul.png",
        ruedaTras: "ruedaAzulTras.png",
        ruedaMed: "ruedaRojaMed.png",
        ruedaDel: "ruedaAzulDel.png",
      },
      config: {
        bota: "Bota Roja",
        guia: "guia azul",
        ruedaTras: "Rueda Azul",
        ruedaMed: "Rueda Roja",
        ruedaDel: "Rueda Azul"
      },
      piezas: {
        bota: [
          {id: "Bota Roja", img: "botaRoja.png", precio: "40"}
        ],
        ruedaTras: [
          {id: "Rueda Azul", img: "ruedaAzulTras.png", precio: "10"},
          {id: "Rueda Roja", img: "ruedaRojaTras.png", precio: "12"}
          ],
        ruedaMed: [
          {id: "Rueda Azul", img: "ruedaAzulMed.png", precio: "10"},
          {id: "Rueda Roja", img: "ruedaRojaMed.png", precio: "12"}
          ],        
        ruedaDel: [
          {id: "Rueda Azul", img: "ruedaAzulDel.png", precio: "10"},
          {id: "Rueda Roja", img: "ruedaRojaDel.png", precio: "12"}
          ],
          guia: [
            {id: "guia roja", img: "guiaRoja.png", precio: "20"},
            {id: "guia azul", img: "guiaAzul.png", precio: "25"}
          ]
      }
    }
  }
  //Handlers
    handleChangeBota(ev){
      const img = this.state.piezas.botas.filter(bota=> bota.id === ev.target.value)[0].img
      this.setState({
        config: Object.assign({},this.state.config,{bota: ev.target.value}),
        imagenes: Object.assign({}, this.state.imagenes,{bota: img})
      })
    }
    handleChangeGuia(ev){
      const img = this.state.piezas.guia.filter(guia=> guia.id === ev.target.value)[0].img
      this.setState({
        config: Object.assign({},this.state.config,{guia: ev.target.value}),
        imagenes: Object.assign({}, this.state.imagenes,{guia: img})
      })
    }
    handleChangeRuedaTras(ev){
    const img = this.state.piezas.ruedaTras.filter(tras=> tras.id === ev.target.value)[0].img
    this.setState({
      config: Object.assign({},this.state.config,{ruedaTras: ev.target.value}),
      imagenes: Object.assign({}, this.state.imagenes,{ruedaTras: img})
    })
    }
      handleChangeRuedaMed(ev){
      const img = this.state.piezas.ruedaMed.filter(ruedaMed=> ruedaMed.id === ev.target.value)[0].img
      this.setState({
        config: Object.assign({},this.state.config,{ruedaMed: ev.target.value}),
        imagenes: Object.assign({}, this.state.imagenes,{ruedaMed: img})
      })
    }
      handleChangeRuedaDel(ev){
      const img = this.state.piezas.ruedaDel.filter(ruedaDel=> ruedaDel.id === ev.target.value)[0].img
      this.setState({
        config: Object.assign({},this.state.config,{ruedaDel: ev.target.value}),
        imagenes: Object.assign({}, this.state.imagenes,{ruedaDel: img})
      })
    }
  
  render() {
    return (
      <Grid fluid className="App">
        <Row className="App-header">
          <h2> Nexus Customizer - Prueba de concepto</h2>
        </Row>
        <Row className="content"> 
          <Col className="controls" md={4}>
            <form>
              <FormGroup controlId="formBota">
                <ControlLabel>Bota</ControlLabel>
                <FormControl componentClass="select" value={this.state.config.bota} onChange={this.handleChangeBota.bind(this)}>
                  {this.state.piezas.bota.map((bota,idx)=>{
                      return <option value={bota.id} key={idx}>{bota.id}</option>})}
                </FormControl>
              </FormGroup>
              <FormGroup controlId="formGuia">
                <ControlLabel>Guia</ControlLabel>
                <FormControl componentClass="select" value={this.state.config.guia} onChange={this.handleChangeGuia.bind(this)}>
                  {this.state.piezas.guia.map((guia,idx)=>{
                      return <option value={guia.id} key={idx}>{guia.id}</option>})}
                </FormControl>
              </FormGroup>
              <FormGroup controlId="formRuedaTras">
                <ControlLabel>Rueda Trasera</ControlLabel>
                <FormControl componentClass="select" value={this.state.config.ruedaTras} onChange={this.handleChangeRuedaTras.bind(this)}>
                  {this.state.piezas.ruedaTras.map((ruedaTras,idx)=>{
                      return <option value={ruedaTras.id} key={idx}>{ruedaTras.id}</option>})}
                </FormControl>
              </FormGroup>
              <FormGroup controlId="formRuedaMed">
                <ControlLabel>Rueda Media</ControlLabel>
                <FormControl componentClass="select" value={this.state.config.ruedaMed} onChange={this.handleChangeRuedaMed.bind(this)}>
                  {this.state.piezas.ruedaMed.map((ruedaMed,idx)=>{
                      return <option value={ruedaMed.id} key={idx}>{ruedaMed.id}</option>})}
                </FormControl>
              </FormGroup>
              <FormGroup controlId="formRuedaDel">
                <ControlLabel>Rueda Delantera</ControlLabel>
                <FormControl componentClass="select" value={this.state.config.ruedaDel} onChange={this.handleChangeRuedaDel.bind(this)}>
                  {this.state.piezas.ruedaDel.map((ruedaDel,idx)=>{
                      return <option value={ruedaDel.id} key={idx}>{ruedaDel.id}</option>})}
                </FormControl>
              </FormGroup>
            </form>
            <Precio state={this.state}/>
          </Col>
          <Col className="canvas-frame" md={8}>
            <div style={{position: "relative"}} id="marquee">
            <ImageStack imagenes={this.state.imagenes}/>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
const Precio = ({state})=>{
  const precio = Object.keys(state.config).reduce((acc,pieza)=> {
    return acc + parseInt(state.piezas[pieza].filter(item => item.id === state.config[pieza])[0].precio)
  },0) + "€"
  return <Row> <h4> Precio: {precio}</h4> </Row>

}
export default App;
