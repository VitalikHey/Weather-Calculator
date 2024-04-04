import React, {useState} from "react";
import Alert from "react-bootstrap/Alert";
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
    const [errorVisible, setErrorVisible] = useState(false)

    const date = weather

    const api = {
        key: "8360261426be225f1625ad30ed2d4888",
        base: "https://api.openweathermap.org/data/2.5"
    }

    // Отправляет запрос на сервер, получив ответ проверяет на наличие ошибок, в случае таковых появится alert с ошибкой,
    // а страница не загрузится
    const searchPressed = () => {
        fetch(`${api.base}/forecast?q=${inputValue}&units=metric&lang=ru&APPID=${api.key}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Город не найден');
                }
                return response.json();
            })
            .then(result => {
                setWeather(result);
                setInputValue("");
                setErrorVisible(false);
                setVisible(true);
                console.log(result)
            })
            .catch(error => {
                console.error(error);
                setVisible(false);
                setErrorVisible(true);
                setInputValue("");
            });
    }

    // Обрабатывает изменения поля ввода
    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    // Возвращает массив полученный путём фильтрации исходного массива, полученного от сервера,
    // содержащий в себе индексы элементов с значением времени 12:00
    function getIndexesWith12HourDate(weather) {
        const twelveHourIndexes = [];
        for (let i = 0; i < weather.list.length; i++) {
            const date = new Date(weather.list[i].dt_txt);
            if (date.getHours() === 12) {
                twelveHourIndexes.push(i);
            }
        }
        console.log(twelveHourIndexes)
        return twelveHourIndexes;
    }

    // Возвращает массив, получившийся путём "фильтрации" исходного массива, полученного от сервера,
    // для того чтобы хранить в себе индексы дня, во время которого эта функция была вызвана
    function getActuallyWeather(weather) {
        const actuallyArrayDate = []
        const actuallyDate = new Date();
        for (let index = 0; index < weather.list.length; index++) {
            const date = new Date(weather.list[index].dt_txt);
            if (date.getDate() === actuallyDate.getDate()) {
                actuallyArrayDate.push(index);
            }
        }
        return actuallyArrayDate;
    }

    // Возвращает сокращенную строку даты и времени
    function giveStringDate(numDay) {
        const string = weather.list[String(getIndexesWith12HourDate(date)[numDay])].dt_txt
        const shortString = string.substring(0, 10);
        return (shortString);
    }

    function getTime() {
        let indexForWeather
        const time = new Date(getActuallyWeather(date)[0]).getHours()
        if (time > 12) {
            indexForWeather = [1, 2, 3, 4]
        } else {
            indexForWeather = [0, 1, 2, 3]
        }
        return indexForWeather;
    }

    // Возвращает иконку в зависимости от значения погоды
    const getIconForWeather = (numDay) => {
        switch (weather.list[numDay].weather[0].description) {
            case "пасмурно":
                return (
                    <img
                        alt="cloud"
                        src={iconCloud}
                        height="30px"
                        width="30px"
                    />
                );
            case "облачно с прояснениями":
                return (
                    <img
                        alt="cloudy"
                        src={iconCloudyWithClarifications}
                        height="30px"
                        width="30px"
                    />
                );
            case "переменная облачность":
                return (
                    <img
                        alt="cloudy"
                        src={iconCloudyWithClarifications}
                        height="30px"
                        width="30px"
                    />
                );
            case "небольшая облачность":
                return (
                    <img
                        alt="cloudy"
                        src={iconCloudyWithClarifications}
                        height="30px"
                        width="30px"
                    />
                );
            case "дождь":
                return (
                    <img
                        alt="rain"
                        src={iconRain}
                        height="30px"
                        width="30px"
                    />
                );
            case "небольшой дождь":
                return (
                    <img
                        alt="smallRain"
                        src={iconSmallRain}
                        height="30px"
                        width="30px"
                    />
                );
            case "ясно":
                return (
                    <img
                        alt="light"
                        src={iconClear}
                        height="30px"
                        width="30px"
                    />
                );
            case "небольшой снег":
                return (
                    <img
                        alt="smallSnow"
                        src={iconSnow}
                        height="30px"
                        width="30px"
                    />
                );
            case "снег":
                return (
                    <img
                        alt="snow"
                        src={iconSnow}
                        height="30px"
                        width="30px"
                    />
                );
        }
    }

    // Возвращает иконку термометра, в зависимости от значения температуры
    const getIconThermometer = (numDay) => {
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
                );
            case false:
                return (
                    <img
                        alt="thermometerMinus"
                        src={iconMinusThermometer}
                        height="30px"
                        width="30px"
                    />
                );
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
            <div>
                {errorVisible &&
                    <Alert className="error-alert-size" variant="danger">
                        <p>Ошибка в названии населённого пункта, или проблемы с интернетом!</p>
                        <Button variant="danger" onClick={() => {
                            setErrorVisible(false)
                        }}>
                            Закрыть
                        </Button>
                    </Alert>
                }
            </div>
            <div style={{paddingLeft: "50px", paddingTop: "10px"}}>
                {visible &&
                    <Card className="w-25" style={{boxShadow: "0px 0px 5px 0px #161616"}}>
                        <Card.Header>
                            <span className="main-card-header-style">
                                {visible && weather.city.name + " "}
                            </span>
                            {visible &&
                                <span style={{fontSize: "18px"}}>
                                    сегодня:
                                </span>
                            }
                        </Card.Header>
                        <Card.Body>
                            <div>
                                <Card.Text>
                                    Температура {getIconThermometer(String(getActuallyWeather(date)[0]))} {visible && weather.list[String(getActuallyWeather(date)[0])].main.temp + "°C"}
                                </Card.Text>
                                <Card.Text>
                                    Погода {getIconForWeather(String(getActuallyWeather(date)[0]))}
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
                                    {weather.list[String(getActuallyWeather(date)[0])].main.humidity + "%"}
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                }
            </div>
            <div className="card-icon-position">
                {visible &&
                    <Card style={{boxShadow: "0px 0px 5px 0px #161616", width: "200px"}}>
                        <Card.Header>
                            {visible &&
                                <span className="card-header-style">
                                    {giveStringDate(getTime()[0])}
                                </span>
                            }
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {getIconThermometer(String(getIndexesWith12HourDate(date)[getTime()[0]]))}
                                {visible && weather.list[String(getIndexesWith12HourDate(date)[getTime()[0]])].main.temp + "°C"}
                            </Card.Text>
                            <Card.Text>
                                {getIconForWeather(String(getIndexesWith12HourDate(date)[getTime()[0]]))}
                            </Card.Text>
                            <Card.Text>
                                <img
                                    alt="thermometer"
                                    src={iconWind}
                                    height="30px"
                                    width="30px"
                                />
                                {weather.list[String(getIndexesWith12HourDate(date)[getTime()[0]])].wind.speed}м/c
                            </Card.Text>
                        </Card.Body>
                    </Card>
                }
                <div className="card-pos">
                    {visible &&
                        <Card style={{width: "200px"}}>
                            <Card.Header>
                                {visible &&
                                    <span className="card-header-style">
                                    {giveStringDate(getTime()[1])}
                                    </span>
                                }
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {getIconThermometer(String(getIndexesWith12HourDate(date)[getTime()[1]]))}
                                    {visible && weather.list[String(getIndexesWith12HourDate(date)[getTime()[1]])].main.temp + "°C"}
                                </Card.Text>
                                <Card.Text>
                                    {getIconForWeather(String(getIndexesWith12HourDate(date)[getTime()[1]]))}
                                </Card.Text>
                                <Card.Text>
                                    <img
                                        alt="thermometer"
                                        src={iconWind}
                                        height="30px"
                                        width="30px"
                                    />
                                    {weather.list[String(getIndexesWith12HourDate(date)[getTime()[1]])].wind.speed}м/c
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    }
                </div>
                <div className="card-pos">
                    {visible &&
                        <Card style={{width: "200px"}}>
                            <Card.Header>
                                {visible &&
                                    <span className="card-header-style">
                                    {giveStringDate(getTime()[2])}
                                    </span>
                                }
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {getIconThermometer(String(getIndexesWith12HourDate(date)[getTime()[2]]))}
                                    {visible && weather.list[String(getIndexesWith12HourDate(date)[getTime()[2]])].main.temp + "°C"}
                                </Card.Text>
                                <Card.Text>
                                    {getIconForWeather(String(getIndexesWith12HourDate(date)[getTime()[2]]))}
                                </Card.Text>
                                <Card.Text>
                                    <img
                                        alt="thermometer"
                                        src={iconWind}
                                        height="30px"
                                        width="30px"
                                    />
                                    {weather.list[String(getIndexesWith12HourDate(date)[getTime()[2]])].wind.speed}м/c
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    }
                </div>
                <div className="card-pos">
                    {visible &&
                        <Card style={{width: "200px"}}>
                            <Card.Header>
                                {visible &&
                                    <span className="card-header-style">
                                    {giveStringDate(3)}
                                    </span>
                                }
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {getIconThermometer(String(getIndexesWith12HourDate(date)[getTime()[3]]))}
                                    {visible && weather.list[String(getIndexesWith12HourDate(date)[getTime()[3]])].main.temp + "°C"}
                                </Card.Text>
                                <Card.Text>
                                    {getIconForWeather(String(getIndexesWith12HourDate(date)[getTime()[3]]))}
                                </Card.Text>
                                <Card.Text>
                                    <img
                                        alt="thermometer"
                                        src={iconWind}
                                        height="30px"
                                        width="30px"
                                    />
                                    {weather.list[String(getIndexesWith12HourDate(date)[getTime()[3]])].wind.speed}м/c
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