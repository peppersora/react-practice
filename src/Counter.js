import { Component } from "react";

class Counter extends Component {
    state = {
            number:0,
            fixedNumber: 0
    
    };
    render() {
        //state를 조회할때는 this.state로 조회한다.
        const {number,fixedNumber} = this.state;
        return(
            <div>
             <h1>{number}</h1>
             <h1> 바뀌지 않는 값 : {fixedNumber}</h1>
             <button onClick={() => {
                //this.state를 사용하여 state에 새로운 값을 넣을 수 있다.
               this.setState(
                {
    
                    number: number+1
                },
                () => {
                    console.log("setState실행완료!!");
                    console.log(this.state);
                }
               );
            }
           
        }
             >
                +1
             </button>
            </div>
        );
            };



};


export default Counter;