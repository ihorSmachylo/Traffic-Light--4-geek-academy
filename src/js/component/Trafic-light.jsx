import React, {useState} from 'react';
import "../../styles/index.css";


const TrafficLight = () => {
    const [color, setColor] = useState("");
    
    return (

        <div className="contenedor">
            <div className="traffic-light">
                <div onClick={ () => setColor("red")} className={"light red" + (color == "red" ? " glow-red" : "")}></div>
                <div className={"light yellow" + (color == "yellow" ? " glow-yellow" : "")}></div>
                <div className={"light green" + (color == "green" ? " glow-green" : "")}></div>
                

            </div>
            <div>
            <button onClick={ () => setColor("red")}>RED</button>
            <br />
            <button onClick={ () => setColor("yellow")}>YELLOW</button>
            <br />
            <button onClick={ () => setColor("green")}>GREEN</button>
            <br />
            {/* <button onClick={ () => setColor("blue")}>blue</button> Tengo que acabar esta parte  para añadir otro color  */}
            </div>
            
        </div>
    )
}



export default TrafficLight;