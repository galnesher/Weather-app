import React from 'react';
import Bounce from 'react-reveal/Bounce';


const Forecast = (props) => {

    return (
        <>
            <div className="forecsat-container ">
                <Bounce right>
                    {props.data.list.map(obj => (
                        <div key={obj.dt} className="forecast-card">
                            <p>{new Date(obj.dt_txt).toLocaleDateString()}</p>
                            <p>{new Date(obj.dt_txt).toLocaleTimeString()}</p>
                            <img src={`http://openweathermap.org/img/wn/${obj.weather[0].icon}.png`} alt="weatherIcon" />
                            <h2>{Math.round(obj.main.temp)}°</h2>
                        </div>
                    ))}
                </Bounce>
            </div>
        </>
    )
}
export default Forecast;