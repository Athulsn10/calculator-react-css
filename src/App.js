import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');
  const [displayTop, setDisplayTop] = useState('');

  const handleDisplayChange = (content) => {
    setDisplay((prevDisplay) => prevDisplay + content);
  };

  const handleOperatorClick = (content) => {
    setDisplayTop((prevDisplay) =>prevDisplay+display+content);
    setDisplay('');
  };

  const handleAllClear = () => {
    setDisplay('');
    setDisplayTop('');
  };

  const handleBackspace = () => {
    setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setDisplay(eval(displayTop+display));
      setDisplayTop('');
    } catch (error) {
      alert("enter valid values")
    }
    
  };

  return (
    <div className="container">
      <div className="calculator">
        <form>
          <div className="display">
            <input type="text" id="display-top" value={displayTop} readOnly /><br/>
            <input type="text" id="display" value={display} readOnly />
          </div>
          <div>
            <input type="button" value="AC" onClick={() => handleAllClear()} className="operator" id='ac' />
            <input id='btn' type="button" value="DEL" onClick={() => handleBackspace()} className="operator" />
            <input id='btn' type="button" value="/" onClick={() => handleOperatorClick('/')} className="operator" />
          </div>
          <div>
            <input id='btn' type="button" value="7" onClick={() => handleDisplayChange('7')} />
            <input id='btn' type="button" value="8" onClick={() => handleDisplayChange('8')} />
            <input id='btn' type="button" value="9" onClick={() => handleDisplayChange('9')} />
            <input id='btn' type="button" value="×" onClick={() => handleOperatorClick('*')} className="operator" />
          </div>
          <div>
            <input id='btn' type="button" value="4" onClick={() => handleDisplayChange('4')} />
            <input id='btn' type="button" value="5" onClick={() => handleDisplayChange('5')} />
            <input id='btn' type="button" value="6" onClick={() => handleDisplayChange('6')} />
            <input id='btn' type="button" value="-" onClick={() => handleOperatorClick('-')} className="operator" />
          </div>
          <div>
            <input id='btn' type="button" value="1" onClick={() => handleDisplayChange('1')} />
            <input id='btn' type="button" value="2" onClick={() => handleDisplayChange('2')} />
            <input id='btn' type="button" value="3" onClick={() => handleDisplayChange('3')} />
            <input id='btn' type="button" value="+" onClick={() => handleOperatorClick('+')} className="operator" />
          </div>
          <div>
            <input id='btn' type="button" value="0" onClick={() => handleDisplayChange('0')} />
            <input id='btn' type="button" value="." onClick={() => handleDisplayChange('.')} className="operator" />
            <input id='eq' type="button" value="=" onClick={() => handleCalculate()} className="equal operator" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
