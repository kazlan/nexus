import React, {Component} from 'react';
import { Grid, Row} from 'react-bootstrap'

class App extends Component {
  
  render() {
    return (
      <Grid fluid className="Configurator">
          <Row className="App-header">
          <h2> Nexus Customizer - Prueba de concepto</h2>
          </Row>
          {this.props.children}
      </Grid>
    )
  }
}

export default App;