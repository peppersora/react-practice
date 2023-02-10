import { Component } from "react";

class EventPractice extends Component {
    state = {
        message: ""
    }
    constructor(props) {
        super(props);
        this.handleChange = this.handlechange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e){
        this.setState({
            message: e.target.value 
        });
    }
    handleClick(e){
        this.setState({
            message:""
        });
    }

    render(){
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input
                type="text"
                name="message"
                placeholder="입력하세요"
                value={this.state.message}
                onChange={ this.handleChange}
                />
                <button onClick={ this.handleClick

                }>
                    확인
                </button>
            </div>
        );
    }

}
export default EventPractice;