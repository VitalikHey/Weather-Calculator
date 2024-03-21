import React, {useState} from "react";
import "./calculateStyle.css"

function Calculate() {
    const [outputResult, setOutputResult] = useState("")

    const handleClick = (event) => {
        const value = event.target.name
        setOutputResult(outputResult + value)
    }

    const clearResult = () => {
        setOutputResult("")
    }

    const calculationResult = () => {
        setOutputResult(eval(outputResult))
    }

    return (
        <div style={{paddingLeft: "500px", paddingRight: "500px"}}>
            <h3 className="result">{outputResult}</h3>
            <div className="place-button-calculate">
                <button className="button" name="0" onClick={handleClick}>0</button>
                <button className="button" name="1" onClick={handleClick}>1</button>
                <button className="button" name="2" onClick={handleClick}>2</button>
                <button className="button" name="3" onClick={handleClick}>3</button>
                <button className="button" name="4" onClick={handleClick}>4</button>
                <button className="button" name="5" onClick={handleClick}>5</button>
                <button className="button" name="6" onClick={handleClick}>6</button>
                <button className="button" name="7" onClick={handleClick}>7</button>
                <button className="button" name="8" onClick={handleClick}>8</button>
                <button className="button" name="9" onClick={handleClick}>9</button>
                <button className="button" name="+" onClick={handleClick}>+</button>
                <button className="button" name="-" onClick={handleClick}>-</button>
                <button className="button" name="*" onClick={handleClick}>*</button>
                <button className="button" name="/" onClick={handleClick}>/</button>
                <button className="button" name="=" onClick={calculationResult}>=</button>
                <button className="button" name="C" onClick={clearResult}>C</button>
            </div>
        </div>
    )
}

export default Calculate