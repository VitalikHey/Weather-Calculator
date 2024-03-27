import React, {useState} from "react";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Card from "react-bootstrap/Card"
import "../weather/Weather.css"
import iconMagnifer from "../../images/satellite-dish-svgrepo-com.svg"
import weatherIcon from "../../images/clouds-svgrepo-com.svg"

function Weather() {
    const [inputValue, setInputValue] = useState("")
    const [weather, setWeather] = useState({})
    const [visible, setVisible] = useState(false)

    const api = {
        key: "8360261426be225f1625ad30ed2d4888",
        base: "https://api.openweathermap.org/data/2.5"
    }

    const searchPressed = () => {
        fetch(`${api.base}/forecast?q=${inputValue}&units=metric&lang=ru&APPID=${api.key}`)
            .then(response => response.json())
            .then((result) => {
                setWeather(result)
                setInputValue("")
                setVisible(true)
                console.log(result)
            })
    }

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    // Нужно придумать алгоритм создания иконок при различной погоде

    return (
        <div>
            <div className="form-style">
                <Form>
                    <Form.Control onChange={handleChange} type="text" value={inputValue} placeholder="Город или село"/>
                </Form>
                <Button variant="outline-primary" className="button-style" onClick={searchPressed}>
                    <img
                        alt={"icon"}
                        src={iconMagnifer}
                        width="20px"
                        height="18px"
                    />
                </Button>
            </div>
            <div>
                {visible &&
                    <Card className="w-25">
                        <Card.Header>{visible && weather.city.name}{"\n"}{visible && <span style={{fontSize: "13px"}}>
                        {weather.list["5"].dt_txt}
                    </span>}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {visible && weather.list["5"].main.temp + "°C"}
                            </Card.Text>
                            <Card.Text>
                                {visible && weather.list["5"].weather[0].main}{' '}
                                <img
                                    alt="weatherIcon"
                                    src={weatherIcon}
                                    width="30px"
                                    height="30px"
                                />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                }
            </div>
        </div>
    );
}

export default Weather;