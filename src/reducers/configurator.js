import { INIT_FETCH, FETCH_OK, MODIFY_PIEZA } from '../actions/configurator'
const initialState = {
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
        guia: [
          {id: "guia roja", img: "guiaRoja.png", precio: "20"},
          {id: "guia azul", img: "guiaAzul.png", precio: "25"}
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
          ]
      }
    }

const configurator = (state=initialState, {type, payload})=>{
    switch(type){

      case INIT_FETCH:
        console.log('fetch initiated')
        return state

      case FETCH_OK:
        console.log('fetch ok')
        return state

      case MODIFY_PIEZA:
        const {pieza, item} = payload
        const img = state.piezas[pieza].filter(x=> x.id === item)[0].img
        return Object.assign({}, state, {
          config: Object.assign({}, state.config, {[pieza]: item}),
          imagenes: Object.assign({}, state.imagenes,{[pieza]: img})
          })

      default:
          return state
    }
}
export default configurator