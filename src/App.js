import React, { Component } from 'react';
import './App.css'

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
    };
  }

  handleDisplayChange = (content) => {
    this.setState((prevState) => ({
      display: prevState.display + content,
    }));
  };

  handleAllClear = () => {
    this.setState({ display: '' });
  };

  handleBackspace = () => {
    this.setState((prevState) => ({
      display: prevState.display.slice(0, -1),
    }));
  };

  handleCalculate = () => {
    const { display } = this.state;
    console.log('Expression to evaluate:', display);
    try {
      const result = eval(display);
      console.log('Result:', result);
      this.setState({ display: result.toString() });
    } catch (error) {
      console.error('Evaluation error:', error);
    }
  };

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <form>
            <div className="display">
              <input type="text" id="display" value={this.state.display} readOnly />
            </div>
            <div>
              <input type="button" value="AC" onClick={() => this.handleAllClear()} className="operator" id='ac' />
              <input id='btn' type="button" value="DEL" onClick={() => this.handleBackspace()} className="operator" />
              <input id='btn' type="button" value="/" onClick={() => this.handleDisplayChange('/')} className="operator" />
            </div>
            <div>
              <input id='btn' type="button" value="7" onClick={() => this.handleDisplayChange('7')} />
              <input id='btn' type="button" value="8" onClick={() => this.handleDisplayChange('8')} />
              <input id='btn' type="button" value="9" onClick={() => this.handleDisplayChange('9')} />
              <input id='btn' type="button" value="×" onClick={() => this.handleDisplayChange('*')} className="operator" />
            </div>
            <div>
              <input id='btn' type="button" value="4" onClick={() => this.handleDisplayChange('4')} />
              <input id='btn' type="button" value="5" onClick={() => this.handleDisplayChange('5')} />
              <input id='btn' type="button" value="6" onClick={() => this.handleDisplayChange('6')} />
              <input id='btn' type="button" value="-" onClick={() => this.handleDisplayChange('-')} className="operator" />
            </div>
            <div>
              <input id='btn' type="button" value="1" onClick={() => this.handleDisplayChange('1')} />
              <input id='btn' type="button" value="2" onClick={() => this.handleDisplayChange('2')} />
              <input id='btn' type="button" value="3" onClick={() => this.handleDisplayChange('3')} />
              <input id='btn' type="button" value="+" onClick={() => this.handleDisplayChange('+')} className="operator" />
            </div>
            <div>
              
              <input id='btn' type="button" value="0" onClick={() => this.handleDisplayChange('0')} />
              <input id='btn' type="button" value="." onClick={() => this.handleDisplayChange('.')} className="operator" />
              <input id='eq' type="button" value="=" onClick={() => this.handleCalculate()} className="equal operator" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Calculator;
