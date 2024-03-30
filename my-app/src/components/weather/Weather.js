import React, {useState} from "react";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Card from "react-bootstrap/Card"
import "../weather/Weather.css"
import iconMagnifier from "../../images/satellite-dish-svgrepo-com.svg"
import iconCloud from "../../images/iconForWeather/cloud.svg"
import iconRain from "../../images/iconForWeather/rain.svg"
import iconClear from "../../images/iconForWeather/sun.svg"
import iconSnow from "../../images/iconForWeather/snow.svg"
import iconSmallRain from "../../images/iconForWeather/smallRain.svg"
import iconMinusThermometer from "../../images/iconForWeather/iconMinusThermometer.svg"
import iconPlusThermometer from "../../images/iconForWeather/thermometerPlus.svg"
import iconCloudyWithClarifications from "../../images/iconForWeather/cloudyWithClarifications.svg"
import iconWind from "../../images/iconForWeather/windVersTwo.svg"
import iconHumidity from "../../images/iconForWeather/humidity.svg"

function Weather() {
    const [inputValue, setInputValue] = useState("")
    const [weather, setWeather] = useState({})
    const [visible, setVisible] = useState(false)

    const date = weather

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

    function getIndexesWith12HourDate(weather) {
        const twelveHourIndexes = [];
        for (let i = 0; i < weather.list.length; i++) {
            const date = new Date(weather.list[i].dt_txt);
            if (date.getHours() === 12) {
                twelveHourIndexes.push(i);
            }
        }
        return twelveHourIndexes;
    }

    function getActuallyWeather(weather) {
        const actuallyArrayDate = []
        const actuallyDate = new Date()
        for (let index = 0; index < weather.list.length; index++) {
            const date = new Date(weather.list[index].dt_txt)
            if (date.getDate() === actuallyDate.getDate()) {
                actuallyArrayDate.push(index)
            }
        }
        return actuallyArrayDate;
    }


    const iconForWeather = (numDay) => {
        switch (weather.list[numDay].weather[0].description) {
            case "пасмурно":
                return (
                    <img
                        alt="cloud"
                        src={iconCloud}
                        height="30px"
                        width="30px"
                    />
                )
            case "облачно с прояснениями":
                return (
                    <img
                        alt="cloudy"
                        src={iconCloudyWithClarifications}
                        height="30px"
                        width="30px"
                    />
                )
            case "переменная облачность":
                return (
                    <img
                        alt="cloudy"
                        src={iconCloudyWithClarifications}
                        height="30px"
                        width="30px"
                    />
                )
            case "небольшая облачность":
                return (
                    <img
                        alt="cloudy"
                        src={iconCloudyWithClarifications}
                        height="30px"
                        width="30px"
                    />
                )
            case "дождь":
                return (
                    <img
                        alt="rain"
                        src={iconRain}
                        height="30px"
                        width="30px"
                    />
                )
            case "небольшой дождь":
                return (
                    <img
                        alt="smallRain"
                        src={iconSmallRain}
                        height="30px"
                        width="30px"
                    />
                )
            case "ясно":
                return (
                    <img
                        alt="light"
                        src={iconClear}
                        height="30px"
                        width="30px"
                    />
                )
            case "небольшой снег":
                return (
                    <img
                        alt="smallSnow"
                        src={iconSnow}
                        height="30px"
                        width="30px"
                    />
                )
            case "снег":
                return (
                    <img
                        alt="snow"
                        src={iconSnow}
                        height="30px"
                        width="30px"
                    />
                )
        }
    }

    const iconThermometer = (numDay) => {
        const temperature = weather.list[numDay].main.temp;

        switch (temperature > 0) {
            case true:
                return (
                    <img
                        alt="thermometerPlus"
                        src={iconPlusThermometer}
                        height="30px"
                        width="30px"
                    />
                )
            case false:
                return (
                    <img
                        alt="thermometerMinus"
                        src={iconMinusThermometer}
                        height="30px"
                        width="30px"
                    />
                )
        }
    }

    return (
        <div>
            <div className="form-style">
                <Form>
                    <Form.Control
                        onKeyPress={(event) => {
                            if (event.key === "Enter") {
                                event.preventDefault()
                                searchPressed()
                            }
                        }}
                        onChange={handleChange}
                        type="text"
                        value={inputValue}
                        placeholder="Город или регион"
                    />
                </Form>
                <Button variant="primary" className="button-style" onClick={searchPressed}>
                    <img
                        alt={"icon"}
                        src={iconMagnifier}
                        width="20px"
                        height="18px"
                    />
                </Button>
            </div>
            <div style={{paddingLeft: "50px"}}>
                {visible &&
                    <Card className="w-25" style={{boxShadow: "0px 0px 5px 0px #161616"}}>
                        <Card.Header><span style={{
                            fontWeight: "bold",
                            fontSize: "25px"
                        }}>{visible && weather.city.name}</span>{"\n"}{visible &&
                            <span style={{fontSize: "18px"}}> сегодня: </span>}</Card.Header>
                        <Card.Body>
                            <div>
                                <Card.Text>
                                    Температура {iconThermometer(String(getActuallyWeather(date)[0]))} {visible && weather.list[String(getActuallyWeather(date)[0])].main.temp + "°C"}
                                </Card.Text>
                                <Card.Text>
                                    Погода {iconForWeather(String(getActuallyWeather(date)[0]))}
                                </Card.Text>
                                <Card.Text>
                                    Скорость ветра
                                    <img
                                        alt="wind"
                                        src={iconWind}
                                        height="30px"
                                        width="30px"
                                    />
                                    {weather.list[String(getActuallyWeather(date)[0])].wind.speed}м/c
                                </Card.Text>
                                <Card.Text>
                                    Влажность
                                    <img
                                        alt="humidity"
                                        src={iconHumidity}
                                        height="30px"
                                        width="30px"
                                    />
                                    {weather.list[String(getIndexesWith12HourDate(date)[0])].main.humidity + "%"}
                                </Card.Text>
                            </div>
                        </Card.Body>

                    </Card>
                }
            </div>
            <div className="card-icon-position">
                {visible &&
                    <Card className="w-20" style={{boxShadow: "0px 0px 5px 0px #161616"}}>
                        <Card.Header>{visible && <span
                            style={{
                                fontSize: "16px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontWeight: "bold"
                            }}>
                        {weather.list[String(getIndexesWith12HourDate(date)[1])].dt_txt}
                    </span>}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {iconThermometer(String(getIndexesWith12HourDate(date)[1]))}
                                {visible && weather.list[String(getIndexesWith12HourDate(date)[1])].main.temp + "°C"}
                            </Card.Text>
                            <Card.Text>
                                {iconForWeather(String(getIndexesWith12HourDate(date)[1]))}
                            </Card.Text>
                            <Card.Text>
                                <img
                                    alt="thermometer"
                                    src={iconWind}
                                    height="30px"
                                    width="30px"
                                />
                                {weather.list[String(getIndexesWith12HourDate(date)[1])].wind.speed}м/c
                            </Card.Text>
                        </Card.Body>
                    </Card>
                }
                <div className="card-pos">
                    {visible &&
                        <Card className="w-20">
                            <Card.Header>{visible && <span style={{
                                fontSize: "16px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontWeight: "bold"
                            }}>
                        {weather.list[String(getIndexesWith12HourDate(date)[2])].dt_txt}
                    </span>}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {iconThermometer(String(getIndexesWith12HourDate(date)[2]))}
                                    {visible && weather.list[String(getIndexesWith12HourDate(date)[2])].main.temp + "°C"}
                                </Card.Text>
                                <Card.Text>
                                    {iconForWeather(String(getIndexesWith12HourDate(date)[2]))}
                                </Card.Text>
                                <Card.Text>
                                    <img
                                        alt="thermometer"
                                        src={iconWind}
                                        height="30px"
                                        width="30px"
                                    /> {weather.list[String(getIndexesWith12HourDate(date)[2])].wind.speed}м/c
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    }
                </div>
                <div className="card-pos">
                    {visible &&
                        <Card className="w-20">
                            <Card.Header>{visible && <span style={{
                                fontSize: "16px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontWeight: "bold"
                            }}>
                        {weather.list[String(getIndexesWith12HourDate(date)[3])].dt_txt}
                    </span>}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {iconThermometer(String(getIndexesWith12HourDate(date)[3]))}
                                    {visible && weather.list[String(getIndexesWith12HourDate(date)[3])].main.temp + "°C"}
                                </Card.Text>
                                <Card.Text>
                                    {iconForWeather(String(getIndexesWith12HourDate(date)[3]))}
                                </Card.Text>
                                <Card.Text>
                                    <img
                                        alt="thermometer"
                                        src={iconWind}
                                        height="30px"
                                        width="30px"
                                    /> {weather.list[String(getIndexesWith12HourDate(date)[3])].wind.speed}м/c
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    }
                </div>
                <div className="card-pos">
                    {visible &&
                        <Card className="w-20">
                            <Card.Header>{visible && <span style={{
                                fontSize: "16px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontWeight: "bold"
                            }}>
                        {weather.list[String(getIndexesWith12HourDate(date)[4])].dt_txt}
                    </span>}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {iconThermometer(String(getIndexesWith12HourDate(date)[4]))}
                                    {visible && weather.list[String(getIndexesWith12HourDate(date)[4])].main.temp + "°C"}
                                </Card.Text>
                                <Card.Text>
                                    {iconForWeather(String(getIndexesWith12HourDate(date)[4]))}
                                </Card.Text>
                                <Card.Text>
                                    <img
                                        alt="thermometer"
                                        src={iconWind}
                                        height="30px"
                                        width="30px"
                                    /> {weather.list[String(getIndexesWith12HourDate(date)[4])].wind.speed}м/c
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    }
                </div>
            </div>
        </div>
    );
}

export default Weather;