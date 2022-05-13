import {React, Component} from 'react';
import './Calculator.css';

class Calculator extends Component{
    constructor() {
        super();
        this.state = {
            currentInput: []
        };
        this.numberClick = this.numberClick.bind(this);
        this.operatorClick = this.operatorClick.bind(this);
        this.calculateAnswer = this.calculateAnswer.bind(this)
    }

    numberClick = (n) => {
        this.setState({
            currentInput: [...this.state.currentInput, n]
        })
    }

    operatorClick = (o) => {
        this.setState({
            currentInput: [...this.state.currentInput, ' ', o, ' ']
        })
    }

    calculateAnswer = () => {
        console.log("clicked on the = button")
        let total = 0;
        // let arr = [...this.state.currentInput].join('').split(' ');

        // for(let i = 1; i < arr.length; i + 2){
        //     if (i === 1){
        //         switch(arr[i]){
        //             case '+':
        //                 total = arr[i - 1] + arr[i + 1] ? arr[i + 1] : 0;
        //                 break;
                    
        //             default:
        //                 break;
        //         }
        //     }
        // }

        this.setState({
            currentInput: [total]
        })
    }

    render() {
        return (
            <div id='calculator-wrapper'>

                <span id='calculator-display'>
                    {this.state.currentInput.join('')}
                </span>

                <div id='calculator-buttons'>

                    <div id='calculator-buttons__numbers'>

                        <button onClick={() => this.numberClick(1)}>
                            1
                        </button>

                        <button onClick={() => this.numberClick(2)}>
                            2
                        </button>

                        <button onClick={() => this.numberClick(3)}>
                            3
                        </button>

                        <button onClick={() => this.numberClick(4)}>
                            4
                        </button>

                        <button onClick={() => this.numberClick(5)}>
                            5
                        </button>

                        <button onClick={() => this.numberClick(6)}>
                            6
                        </button>

                        <button onClick={() => this.numberClick(7)}>
                            7
                        </button>

                        <button onClick={() => this.numberClick(8)}>
                            8
                        </button>

                        <button onClick={() => this.numberClick(9)}>
                            9
                        </button>

                        <button onClick={() => this.numberClick(0)}>
                            0
                        </button>

                    </div>

                    <div id='calculator-buttons__operators'>

                        <button onClick={() => this.operatorClick('+')}>
                            +
                        </button>

                    </div>

                    <div id='calculator-buttons__enter'>
                        <button onClick={() => this.calculateAnswer()}>
                            =
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Calculator;