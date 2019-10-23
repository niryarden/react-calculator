import React, {useState, useEffect} from 'react';
import ButtonRow from './ButtonRow';
import Screen from './Screen';
import calculate from './calculate';
import './style.css';

const Calc = () => {
  const [prompt, setPrompt] = useState(0);
  const [equation, setEquation] = useState([]);
  const [lastCharacter, setLastCharacter] = useState();

  useEffect(
    () => {
        if(typeof equation[equation.length - 1] == 'number') {
          const result = calculate(equation);
          setPrompt(result);
        }
    },
    [equation]
  );

  const onNumberClick = (num) => {
    switch (typeof prompt) {
      case 'number':
        // in order to add another digit, multiply by 10 and than add the new digit
        setPrompt(prompt * 10 + num);
        break;
      case 'string':
        if (lastCharacter === '.') {
          setPrompt(Number(prompt + num));
          break;
        }
        else {
          setPrompt(num);
          break;
        }
      default:
        setPrompt(num);
    }
    setLastCharacter(num);
  };

  const onDecimalClick = () => {
    if (typeof prompt == 'number') {
      setPrompt(String(prompt) + '.')
    } else if (lastCharacter === '.') {
      return;
    } else {
      setPrompt('.');
    }
    setLastCharacter('.');
  };

  const onOperatorClick = (operator) => {
    if ((typeof prompt == 'number') || ((typeof prompt == 'string') && (lastCharacter === '.'))) {
      setEquation([...equation, Number(prompt), operator])
      setPrompt(operator);
    }
    else {
      const newCalc = equation.slice(0, equation.length - 1);
      setEquation([...newCalc, operator]);
      setPrompt(operator);
    }
    setLastCharacter(operator);
  };

  const onEqualsClick = () => {
    if (typeof prompt == 'number') {
      setEquation([...equation, prompt]);
    } else {
      resetCalc('error');
    }
  };

  const resetCalc = (newPrompt) => {
    setEquation([]);
    setPrompt(newPrompt);
  };

  return (
    <div className='main-container'>
      <div>
        <Screen prompt={prompt} />
        <button onClick={() => resetCalc(0)}>AC</button>
      </div>
      <ButtonRow items={[{value: 1, onClick: onNumberClick},
                          {value: 2, onClick: onNumberClick},
                          {value: 3, onClick: onNumberClick},
                          {value: "+", onClick: onOperatorClick}]} />
      <ButtonRow items={[{value: 4, onClick: onNumberClick},
                          {value: 5, onClick: onNumberClick},
                          {value: 6, onClick: onNumberClick},
                          {value: "-", onClick: onOperatorClick}]} />
      <ButtonRow items={[{value: 7, onClick: onNumberClick},
                          {value: 8, onClick: onNumberClick},
                          {value: 9, onClick: onNumberClick},
                          {value: "/", onClick: onOperatorClick}]} />
      <ButtonRow items={[{value: ".", onClick: onDecimalClick},
                          {value: 0, onClick: onNumberClick},
                          {value: "=", onClick: onEqualsClick},
                          {value: "*", onClick: onOperatorClick}]} />
    </div>
  );
}

export default Calc;
