import {React, Component} from 'react';
import './Calculator.css';

class Calculator extends Component{
    constructor() {
        super();
        this.state = {
            currentInput: [0],
            newNumber: false
        };
        this.numberClick = this.numberClick.bind(this);
        this.operatorClick = this.operatorClick.bind(this);
        this.calculateAnswer = this.calculateAnswer.bind(this);
        this.clearNumber = this.clearNumber.bind(this);
    }

    numberClick = (n) => {

        if (!this.state.newNumber){
            this.setState({
                currentInput: [n],
                newNumber: true
            })
        }else{
            this.setState({
                currentInput: [...this.state.currentInput, n]
            })
        }
    }

    operatorClick = (o) => {
        if(this.state.currentInput[0] === 0){
            console.log("Doin nothin")
        }else if (this.state.currentInput[this.state.currentInput.length - 1] === " "){
            console.log('true dat')
            console.log(this.state.currentInput.slice(0, 1))
            console.log(this.state.currentInput.length - 3)

            this.setState({
                currentInput: [...this.state.currentInput.slice(0, (this.state.currentInput.length - 3)), ' ', o, ' ']
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
                        break;

                    case '-':
                        total = Number(arr[i - 1]) - Number(arr[i + 1]);
                        break;

                    case 'x':
                        total = Number(arr[i - 1]) * Number(arr[i + 1]);
                        break;

                    case '/':
                        total = Number(arr[i - 1]) / Number(arr[i + 1]);
                        break;
                    
                    default:
                        break;
                }
            }else{
                switch(arr[i]){
                    case '+':
                        total = total + Number(arr[i + 1]);
                        break;

                    case '-':
                        total = total - Number(arr[i + 1]);
                        break;

                    case 'x':
                        total = total * Number(arr[i + 1]);
                        break;

                    case '/':
                        total = total / Number(arr[i + 1]);

                    default:
                        break;
                }
            }
        }

        this.setState({
            currentInput: [total],
            newNumber: false
        })
    }

    clearNumber = () => {
        this.setState({
            currentInput: [0],
            newNumber: false
        });
    }

    render() {
        return (
            <div id='calculator-wrapper' class='container'>

                <div id='calculator-display' class='row'>
                    <h1>{this.state.currentInput.join('')}</h1>
                </div>

                <div id='calculator-buttons' >

                    <div id='calculator-buttons__numbers' class='container'>
                        <div class='row'>
                            <button className="col-sm-4" onClick={() => this.numberClick(1)}>
                                1
                            </button>

                            <button className="col-sm-4" onClick={() => this.numberClick(2)}>
                                2
                            </button>

                            <button className="col-sm-4" onClick={() => this.numberClick(3)}>
                                3
                            </button>
                        </div>

                        <div class='row'>
                            <button onClick={() => this.numberClick(4)}>
                                4
                            </button>

                            <button onClick={() => this.numberClick(5)}>
                                5
                            </button>

                            <button onClick={() => this.numberClick(6)}>
                                6
                            </button>
                        </div>

                        <div class='row'>
                            <button onClick={() => this.numberClick(7)}>
                                7
                            </button>

                            <button onClick={() => this.numberClick(8)}>
                                8
                            </button>

                            <button onClick={() => this.numberClick(9)}>
                                9
                            </button>
                        </div>

                        

                        <button className="col-sm-12" onClick={() => this.numberClick(0)}>
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

                    <div>
                        <button onClick={() => this.clearNumber()}>
                            Clear
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Calculator;