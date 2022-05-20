import {React, Component} from 'react';
import './Calculator.css';

class Calculator extends Component{
    constructor() {
        super();
        this.state = {
            currentInput: [0]
        };
        this.numberClick = this.numberClick.bind(this);
        this.operatorClick = this.operatorClick.bind(this);
        this.calculateAnswer = this.calculateAnswer.bind(this)
    }

    numberClick = (n) => {
        if (this.state.currentInput[0] === 0){
            this.setState({
                currentInput: [n]
            })
        }else{
            this.setState({
                currentInput: [...this.state.currentInput, n]
            })
        }
    }

    operatorClick = (o) => {
        if(this.state.currentInput[this.state.currentInput.length - 1] === " "){
            console.log('true dat')
            this.setState({
                currentInput: [...this.state.currentInput].slice(0, this.state.currentInput.length - 2)
            });

            console.log(this.state.currentInput)

            this.setState({
                currentInput: [...this.state.currentInput, ' ', o, ' ']
            })
        }else{
            this.setState({
                currentInput: [...this.state.currentInput, ' ', o, ' ']
            })
        }
        
    }

    calculateAnswer = () => {
        console.log("clicked on the = button")
        let total = 0;
        let arr = [...this.state.currentInput].join('').split(' ');
        console.log(arr)

        for(let i = 1; i < arr.length; i += 2){
            if (i === 1){
                switch(arr[i]){
                    case '+':
                        total = Number(arr[i - 1]) + Number(arr[i + 1]);
                        console.log(total)
                        break;

                    case '-':
                        total = Number(arr[i - 1]) - Number(arr[i + 1]);
                    
                    default:
                        total = total;
                        break;
                }
            }else{
                switch(arr[i]){
                    case '+':
                        total = total + Number(arr[i + 1]);
                        console.log(total);
                        break;

                    default:
                        total = total;
                        break;
                }
            }
        }

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

                        <button onClick={() => this.operatorClick('-')}>
                            -
                        </button>

                        <button onClick={() => this.operatorClick('x')}>
                            x
                        </button>

                        <button onClick={() => this.operatorClick('/')}>
                            /
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