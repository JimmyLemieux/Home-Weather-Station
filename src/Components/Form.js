import React from "react";
import "./Form.css";
class Form extends React.Component {

  tester = () => {
    console.log("Tester");
  }
  render() {
    return(
      <div>
        <form className="Main-Form" onSubmit={this.props.get}>
          <input id="form-element-in" type="text" name="city" placeholder="City"></input>
          <br></br>
          <input id="form-element-in" type="text" name="country" placeholder="Country"></input>
          <br></br>
          <input id="form-element-submit" type="submit" name="enter" value="Get Your Weather!"></input>
          <br></br>
        </form>
      </div>
    );
  }
} export default Form;
