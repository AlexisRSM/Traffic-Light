import { useEffect, useState } from "react";

function TrafficLight() {
    const [color, setColor] = useState({
        one: "red",
        two: "",
        three: "",
        four: "" //will be added with push of button
    });
    const [intervalId, setIntervalId] = useState(null);
    const [hasPurple, setHasPurple] = useState(false); // Track if the purple light is added
    const [isCycling, setIsCycling] = useState(false); // Track if the cycle is running

    function changeColor(currentColor) {
        if (currentColor.one === "red") {
            return hasPurple ? { one: "", two: "", three: "", four: "purple" } : { one: "", two: "", three: "green", four: "" };
        } else if (currentColor.two === "yellow") {
            return { one: "red", two: "", three: "", four: "" };
        } else if (currentColor.three === "green") {
            return { one: "", two: "yellow", three: "", four: "" };
        } else if (currentColor.four === "purple") {
            return { one: "", two: "", three: "green", four: "" };
        }
        return currentColor;
    }

    //In order to cycle go thorugh purple light cycle need to be stopped 
    //then purple added and only then the cycle will go through purple
    const toggleCycle = () => {
        if (isCycling) {
            clearInterval(intervalId);
            setIntervalId(null);
            setIsCycling(false);
        } else {
            const interval = setInterval(() => {
                setColor(prevColor => changeColor(prevColor));
            }, 2000);
            setIntervalId(interval);
            setIsCycling(true);
        }
    };

    const addPurpleLight = () => {
        setHasPurple(true);
        setColor(prevColor => changeColor(prevColor)); // Immediately update the state to incorporate the purple light
    };

    useEffect(() => {
        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, [intervalId]);

    return (
        <div className="wrapper">
            <div className="row">
                <div className="col-6 d-flex justify-content-end">
                    <button
                        onClick={toggleCycle} // Toggle the cycle when button is pressed
                        type="button"
                        className="btn cycle btn-warning"
                    >
                        {isCycling ? "Stop Cycle" : "Start Cycle"}
                    </button>
                </div>
                <div className="col-6">
                    <button
                        type="button"
                        className="btn add color btn-warning"
                        onClick={addPurpleLight} // Add purple light when button is clicked
                    >
                        Add Purple Light
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="traffic-light">
                    <div className="container">
                        <div
                            onClick={() => setColor({ one: "red", two: "", three: "", four: "" })}
                            className={`${color.one} light`}
                        ></div>
                        <div
                            onClick={() => setColor({ one: "", two: "yellow", three: "", four: "" })}
                            className={`${color.two} light`}
                        ></div>
                        <div
                            onClick={() => setColor({ one: "", two: "", three: "green", four: "" })}
                            className={`${color.three} light`}
                        ></div>
                        {hasPurple && (
                            <div
                                onClick={() => setColor({ one: "", two: "", three: "", four: "purple" })}
                                className={`${color.four} light`}
                            ></div>
                        )}
                        <div className="pole"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrafficLight;
