import React, {useState} from "react";

function Calculate() {
    const [outputResult, setOutputResult] = useState('')

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
        <div>
            <h3 style={{textAlign: "center"}}>{outputResult}</h3>
            <button name="0" onClick={handleClick}>0</button>
            <button name="1" onClick={handleClick}>1</button>
            <button name="2" onClick={handleClick}>2</button>
            <button name="3" onClick={handleClick}>3</button>
            <button name="4" onClick={handleClick}>4</button>
            <button name="5" onClick={handleClick}>5</button>
            <button name="6" onClick={handleClick}>6</button>
            <button name="7" onClick={handleClick}>7</button>
            <button name="8" onClick={handleClick}>8</button>
            <button name="9" onClick={handleClick}>9</button>
            <button name="+" onClick={handleClick}>+</button>
            <button name="-" onClick={handleClick}>-</button>
            <button name="*" onClick={handleClick}>*</button>
            <button name="/" onClick={handleClick}>/</button>
            <button name="=" onClick={calculationResult}>=</button>
            <button name="C" onClick={clearResult}>C</button>


        </div>
    )
}

export default Calculate