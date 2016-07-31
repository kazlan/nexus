import React from 'react'
import { connect } from 'react-redux'
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap'
import { modify_pieza } from '../actions/configurator'

const  mapStateToProps = (state)=>{
    return {
            piezas: state.piezas,
            config: state.config
            }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        onSelectChange: (pieza, item)=> {
            console.log(">Dispatch: ", pieza, item)
            dispatch(modify_pieza(pieza,item))
        }
    }
}
// los params piezas y onSelectChange los recibe al ejecutar el connect
const Formulario = ({piezas, config, onSelectChange}) => (
    <div>
        <form>
        {     
            Object.keys(piezas).map((pieza,idx)=>(
                //corresponde a un select de tipo GUIA, BOTA, RUEDA ...
                <FormGroup controlId={"form" + pieza} key={idx}>
                    <ControlLabel>{pieza}</ControlLabel>
                    <FormControl componentClass="select" value={config[pieza]} 
                                 onChange={(event)=>onSelectChange(pieza,event.target.value)}>
                                 
                        {piezas[pieza].map((item,idx)=>{
                            return <option value={item.id} key={idx}>{item.id}</option>})
                        }
                    </FormControl>
              </FormGroup>
            ))
        }
        </form>
    </div>
)
export default connect(mapStateToProps,mapDispatchToProps)(Formulario)