import React, {Component} from 'react';
import "./style/color.css";
class Colors extends Component {
    constructor(props) {
        super(props)
        this.state= {
            color: "",
        };
        this.changeColor1 = this.changeColor1.bind(this);
        this.changeColor2 = this.changeColor2.bind(this);
        this.changeColor3 = this.changeColor3.bind(this);
    }
    changeColor1() {
        this.setState({ color: "skyblue" });
      }
    
      changeColor2() {
        this.setState({ color: "blue" });
      }
      changeColor3() {
        this.setState({ color: "orange" });
      }
    render() {
        return(
            <div className="color" style = {{ backgroundColor: this.state.color}}>
<div className ="color1" onMouseOver={this.changeColor1}>
skyBlue</div>
<div className ="color2" onMouseOver={this.changeColor2}>
Blue</div>
<div className ="color3" onMouseOver={this.changeColor3}>
Orange</div>
            </div>
        );
    }
}
export default Colors;