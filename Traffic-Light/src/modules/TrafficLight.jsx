
function TrafficLight() {
    const [color, setColor] = useState();

function setColor(color) {
    switch (color) {
        case "red":
            let red_glow = document.querySelector(".red");
            break;
        case "yellow":
            setColor("yellow");
            break;
        case "green":
            setColor("green");
            break;
        default:
            setColor("red");
            break;
    }
}


    return (
        <>
            <div className="traffic-light">
                <div className="container">
                    <div onClick={setColor("red")} className="red light"></div>
                    <div onClick={setColor("yellow")} className="yellow light"></div>
                    <div onClick={setColor("green")} className="green light"></div>
                </div>
                <div className="pole"></div>
            </div>
        </>
    );
}

export default TrafficLight;