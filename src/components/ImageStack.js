
import React, {Component} from 'react'
// Props:
//   status: string[], boolena
class ImageStack extends Component {
    render() {
        return (
            <div>
                <img src={"img/" + this.props.imagenes.bota} className="stack"/>
                <img src={"img/" + this.props.imagenes.guia} className="stack"/>
                <img src={"img/" + this.props.imagenes.ruedaTras} className="stack"/>
                <img src={"img/" + this.props.imagenes.ruedaMed} className="stack"/>
                <img src={"img/" + this.props.imagenes.ruedaDel} className="stack"/>
                
            </div>
        );
    }
}


export default ImageStack