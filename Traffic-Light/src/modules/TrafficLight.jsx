import { useState } from "react";




function TrafficLight() {

    const [color, setColor] = useState({
        one:"",
        two:"",
        three:""
    });




    return (
        <>
            
            <div className="traffic-light">
                <div className="container">
                    <div  onClick={()=>{
                        let clone ={...color}
                        clone.one = "red"
                        clone.two = ""
                        clone.three = ""
                        setColor(clone)
                    }}  className={`${color.one} light`}> </div>
                    <div  onClick={()=>{
                        let clone ={...color}
                        clone.one = ""
                        clone.two = "yellow"
                        clone.three = ""
                        setColor(clone)
                    }}  className={`${color.two} light`}></div>
                    <div  onClick={()=>{
                        let clone ={...color}
                        clone.one = ""
                        clone.two = ""
                        clone.three = "green"
                        setColor(clone)
                    }} className={`${color.three} light`}></div>
                    <div className="pole"></div>
                </div>
               
                
            </div>
        </>
    );
}



export default TrafficLight;