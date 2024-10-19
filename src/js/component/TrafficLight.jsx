import React, { useState } from "react";
import '../../styles/TrafficLight.css'

const TrafficLight = () => {

    const [ligt, setLight] = useState("")
    return (

        <>
            <div className="stem"></div>
            <div className="traffic-light-body">
                <div className={ligt === 'red' ? 'red lights selected' : "red lights"}
                    onClick={() => { setLight("red") }}>
                </div>
                <div className={ligt === 'yellow' ? 'yellow lights selected' : "yellow lights"}
                    onClick={() => { setLight("yellow") }}>
                </div>
                <div className={ligt === 'green' ? 'green lights selected' : "green lights"}
                    onClick={() => { setLight("green") }}>
                </div>
            </div >
        </>
    )
}


export default TrafficLight;


