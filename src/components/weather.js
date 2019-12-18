import React from "react";

// Creating Weather component to display weather information
class Weather extends React.Component{

    render(){
        // Uses regular HTML tags to build up a customized and reusable form component
        // Defines props for city {this.props.city}, temperature {this.props.temperature}, etc.
        //  that will be passed in when the component is called in the "render" function of another file
        // In App.js, see this component being used with props being passed in!
        return(

            <div className="weather-info">
                {
                    this.props.country && this.props.city && <p className="weather__key">Location: 
                        <span className="weather__value">  {this.props.city}, {this.props.country}</span>                    
                    </p> 
                }
                
                {
                    this.props.temperature && <p className="weather__key">Temperature: 
                        <span className="weather__value">  {this.props.temperature}</span>
                    </p>
                }
                
                {
                    this.props.temp_min && <p className="weather__key">Min Temperature: 
                        <span className="weather__value">  {this.props.temp_min}</span>
                    </p>
                }          

                {
                    this.props.temp_max && <p className="weather__key">Max Temperature: 
                        <span className="weather__value">  {this.props.temp_max}</span>
                    </p>
                }   

                {
                    this.props.speed && <p className="weather__key">Wind Speed:  
                        <span className="weather__value">  {this.props.speed}</span>
                    </p>
                }                        

                {
                    this.props.humidity && <p className="weather__key">Humidity: 
                        <span className="weather__value">  {this.props.humidity}</span>
                    </p>
                }

                {
                    this.props.description && <p className="weather__key">Conditions:  
                        <span className="weather__value">  {this.props.description}</span>
                    </p>
                }

                
                {
                    this.props.icon && <p className="weather__key">Icon:  
                        <span className="weather_value">  <img src={`http://openweathermap.org/img/wn/${this.props.icon}.png`} /> </span>
                    </p>
                }

                {
                    this.props.error && <p className="weather__error">{this.props.error}</p>
                }
        
            </div>
        )
    }
}

export default Weather;