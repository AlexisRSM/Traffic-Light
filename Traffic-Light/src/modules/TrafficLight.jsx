import { useState } from "react";




function TrafficLight() {

    const [color, setColor] = useState({
        one: "",
        two: "",
        three: ""
    });




    return (
        <>
            <div className="row">
                <div className="col-6 d-flex justify-content-end">
                    <button
                        onClick={()=>{
                            let clone = {...color}
                            function changeColor(){
                                if(color.one=="red"){
                                    color.one=""
                                    color.two="yellow"
                                    color.three=""
                                }
                                else if(color.two=="yellow"){
                                    color.one=""
                                    color.two=""
                                    color.three="green"
                                }
                                else if(color.three=="green"){
                                    color.one="red"
                                    color.two=""
                                    color.three=""
                                }
                            myInterval = setInterval(changeColor(),3000);
                            }
                        }}
                        type="button" className="btn cycle btn-warning">Press To Cycle</button>
                </div>
                <div className="col-6 ">
                    <button type="button" className="btn add color btn-warning">Add Color</button>
                </div>
            </div>
            <div className="row">
                <div className="traffic-light">
                    <div className="container">
                        <div onClick={() => {
                            let clone = { ...color }
                            clone.one = "red"
                            clone.two = ""
                            clone.three = ""
                            setColor(clone)
                        }} className={`${color.one} light`}> </div>
                        <div onClick={() => {
                            let clone = { ...color }
                            clone.one = ""
                            clone.two = "yellow"
                            clone.three = ""
                            setColor(clone)
                        }} className={`${color.two} light`}></div>
                        <div onClick={() => {
                            let clone = { ...color }
                            clone.one = ""
                            clone.two = ""
                            clone.three = "green"
                            setColor(clone)
                        }} className={`${color.three} light`}></div>
                        <div className="pole"></div>
                    </div>
                </div>
            </div>
        </>
    );
}



export default TrafficLight;