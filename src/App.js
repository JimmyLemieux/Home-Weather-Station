import React from "react";
import {CSSTransitionGroup} from "react-transition-group"; //Some nice ui animaitons
import "./App.css"
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
const API_KEY = `6a1e926ecf467638d204b8752a1f7af7`;

// Sample call: http://api.openweathermap.org/data/2.5/weather?q=Kitchener,CA&APIKEY=6a1e926ecf467638d204b8752a1f7af7


class App extends React.Component {

  state = {
    city:undefined,
    country:undefined,
    clouds:undefined,
    temp:undefined,
    desc:undefined,
    error:undefined
  };

  parse_weather = async (e) => {
     e.preventDefault();
     var CITY = e.target.city.value;
     var COUNTRY = e.target.country.value;
     console.log(CITY, COUNTRY);
     //console.log(e.target.city.value);
     const weather_data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY}&appid=${API_KEY}`);
     const data = await weather_data.json();
     if(CITY === "" || COUNTRY === ""){ console.log("Enter a Value"); }
     if(data.name !== undefined){
       this.setState({
         city:data.name,
         country:data.sys.country,
         clouds: data.clouds.all,
         temp:data.main.temp,
         desc:data.weather[0].description,
         error:"NONE"
       });
     }
   }

  render() {
    return(
      <div className="Parent-View">
      <CSSTransitionGroup transitionName="main" transitionAppear={true} transitionAppearTimeout={1000} transitionEnter={false} transitionLeave={false}>
      <Titles></Titles>
      <Form get={this.parse_weather}></Form>
      <Weather data={this.state}></Weather>
      </CSSTransitionGroup>
      </div>
    );
  }
} export default App;
