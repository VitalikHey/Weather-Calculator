import React, {useState} from "react";
import "./calculateStyle.css"

function Calculate() {
    const [outputResult, setOutputResult] = useState("0")

    const handleClick = (event) => {
        const value = event.target.name

        if (outputResult === "0" || outputResult === 0) {
            setOutputResult(value)
        } else {
            setOutputResult(outputResult + value)
        }
    }

    const clearResult = () => {
        setOutputResult("0")
    }

    const calculationResult = () => {
        try {
            setOutputResult(eval(outputResult))
        } catch (error) {
            alert("Ошибка!")
            console.log(error)
        }
    }

    const buttonArray = [0, 1, "+", "-", 2, 3, "*", "/", 4, 5, ".", "%", 6, 7, 8, 9]

    return (
        <div className="position">
            <div style={{paddingLeft: "500px", paddingRight: "500px"}}>
                <h3 className="result">{outputResult}</h3>
                <div className="place-button-calculate">
                    {buttonArray.map(value =>
                        <button
                            key={value}
                            name={String(value)}
                            className="button"
                            onClick={handleClick}
                        >
                            {value}
                        </button>
                    )}
                    <button className="button" name="=" onClick={calculationResult}>=</button>
                    <button className="button" name="C" onClick={clearResult}>C</button>
                </div>
            </div>
        </div>
    );
}

export default Calculate