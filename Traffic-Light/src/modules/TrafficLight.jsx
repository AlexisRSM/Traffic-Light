import { useEffect, useState } from "react";

function TrafficLight() {
    const [color, setColor] = useState({
        one: "red",
        two: "",
        three: "",
        four: "" // Initially, the purple light is not set
    });
    /* const [intervalId, setIntervalId] = useState(null); */
    const [hasPurple, setHasPurple] = useState(false); // Track if the purple light is added

    function changeColor() {
        if (color.one === "red") {
            if (hasPurple) {
                setColor({ one: "", two: "", three: "", four: "purple" });
            } else {
                setColor({ one: "", two: "", three: "green", four: "" });
            }
        } else if (color.two === "yellow") {
            setColor({ one: "red", two: "", three: "", four: "" });
        } else if (color.three === "green") {
            setColor({ one: "", two: "yellow", three: "", four: "" });
        } else if (color.four === "purple") {
            setColor({ one: "", two: "", three: "green", four: "" });
        }
    }
    

    useEffect(() => {
        const interval = setInterval(() => {
            changeColor();
        }, 2000);
        /* setIntervalId(interval) */;

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [color]);

    const addPurpleLight = () => {
        setHasPurple(true);
        setColor(prevColor => ({ ...prevColor, four: "" }));
    };

    return (
        <>
            <div className="row">
                <div className="col-6 d-flex justify-content-end">
                    <button
                        onClick={() => {
                            clearInterval(intervalId); // Clear the interval when button is clicked
                            changeColor();
                        }}
                        type="button"
                        className="btn cycle btn-warning"
                    >
                        Press To Cycle
                    </button>
                </div>
                <div className="col-6 ">
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
        </>
    );
}

export default TrafficLight;
