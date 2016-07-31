
import React from 'react'
// Props:
//   imagenes:  string[] ej. ["img1.png", "img2.png","lerele.png"]
const ImageStack = ({imagenes})=> (
    <div>
        {Object.keys(imagenes).map( (imagen,idx)=>
            <img src={"./img/"+imagenes[imagen]} key={idx} className="stack" alt={imagenes[imagen]} />)
        }
    </div>
)

export default ImageStack