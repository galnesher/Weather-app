import './dailyWeather.css';

const DailyWeather = (props) => {
    return (
        <>
            {props.data && (
                <>
                    <div className="algin-left ml-10 ">
                        <h1 className="lh-0">{props.data.name} , {props.data.sys.country}</h1>
                        <h3>{new Date().toDateString()}</h3>
                    </div>
                    <div id="container">
                        <div id="left">
                            <div >
                                <div className="row">
                                    <img className="" src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`} alt={props.data.weather[0].description} />
                                    <h1 className="lh-0">{Math.round(props.data.main.temp)}°</h1>
                                </div>
                                <p>{props.data.weather[0].description}</p>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div id="right">
                            <div className="daily-details">
                                <div className="grid-container">
                                    <div className="grid-item"><h4>High: {Math.round(props.data.main.temp_max)}°</h4></div>
                                    <div className="grid-item"><h4>Low: {Math.round(props.data.main.temp_min)}°</h4></div>
                                    <div className="grid-item"><h4>Wind: {props.data.wind.speed}mph</h4></div>
                                    <div className="grid-item"><h4>Humidity: {props.data.main.humidity}%</h4></div>
                                    <div className="grid-item"><h4>Feels like: {Math.round(props.data.main.feels_like)}°</h4></div>
                                    <div className="grid-item"><h4>Visibility: {props.data.visibility} M</h4></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            )}
        </>
    )
}
export default DailyWeather;