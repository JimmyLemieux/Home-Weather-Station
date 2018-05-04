import React from 'react';
import {CSSTransitionGroup} from "react-transition-group";
import "./Weather.css";
class Weather extends React.Component {
    render(){
      return(
        <div className="weather-form">
        {this.props.data.city && <CSSTransitionGroup transitionName="info" transitionAppear={true} transitionAppearTimeout={1500} transitionEnter={false} transitionLeave={false}>
          {this.props.data.city && this.props.data.country && <p> Location: {this.props.data.city}, {this.props.data.country}</p>}
          {this.props.data.temp && <p> Temperature: {parseInt(this.props.data.temp - 273.15)} </p>}
          {this.props.data.desc && <h3 className="lower-title"> Other information </h3>}
          {this.props.data.desc && <p> Weather Description: {this.props.data.desc} </p>}
          {this.props.data.clouds && <p> Clouds in the sky: {this.props.data.clouds} </p>}
        </CSSTransitionGroup>
        }
        </div>
      );
    }
} export default Weather;
