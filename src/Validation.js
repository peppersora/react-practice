import { Component } from "react";
import "./Validation.css";

class Validation extends Component {
    state = {
        password: "",
        clicked: false,
        validated: false,

    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleClick = () => {
        this.setState({
            clicked:true,
            validated: this.state.password === "0000"
        });
        this.input.focus();
    }
    render(){
        return(
            <div>
                <input
                ref={(ref) => this.input = ref}
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                className={this.state.clicked ? (this.state.validated ? "success" : "failure")
            : ""}
                />
                <button onClick={this.handleClick}>검증</button>
            </div>
        )
    }
}
export default Validation;