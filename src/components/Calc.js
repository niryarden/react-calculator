import React, {useState, useEffect} from 'react';
import Button from './Button';
import ButtonRow from './ButtonRow';
import Screen from './Screen';
import calcIt from './calcIt';

const style = {
  'textAlign': 'center'
};

const Calc = () => {
  const [prompt, setPrompt] = useState(0);
  const [calc, setCalc] = useState([]);

  const onNumberClick = (num) => {
    if (typeof prompt == 'number') {
      setPrompt(prompt * 10 + num);
    } else if (typeof prompt == 'string') {
      if (prompt[prompt.length - 1] === '.') {
        setPrompt(Number(prompt + num));
      }
      else {
        setPrompt(num);
      }
    } else {
      setPrompt(num);
    }
  };

  const onDecimalClick = () => {
    if (typeof prompt == 'number') {
      setPrompt(String(prompt) + '.')
    } else {
      setPrompt('.');
    }
  };

  const onOperatorClick = (operator) => {
    if (typeof prompt == 'number') {
      setCalc([...calc, prompt, operator])
      setPrompt(operator);
    }
    else if (typeof prompt == 'string') {
      if (prompt[prompt.length - 1] === '.') {
        const newPrompt = Number(prompt + '0');
        setCalc([...calc, newPrompt, operator]);
        setPrompt(operator);
      } else {
        const newCalc = calc.slice();
        newCalc.pop();
        setCalc([...newCalc, operator]);
        setPrompt(operator);
      }
    }
  };

  const onEqualsClick = () => {
    if (typeof prompt == 'number') {
      setCalc([...calc, prompt]);
    } else {
      setCalc([]);
      setPrompt('error');
    }
  };

  const onNewClick = () => {
    setCalc([]);
    setPrompt("");
  };

  useEffect(
      () => {
          if(typeof calc[calc.length - 1] == 'number') {
            const result = calcIt(calc);
            setPrompt(result);
          }
      },
      [calc]
  );

  return (
    <div style={style}>
      <div>
        <Screen prompt={prompt} />
        <Button value={"AC"} onClick={onNewClick} />
      </div>
      <div>
        <ButtonRow items={[{value: 1, onClick: onNumberClick},
                            {value: 2, onClick: onNumberClick},
                            {value: 3, onClick: onNumberClick},
                            {value: "+", onClick: onOperatorClick}]} />
      </div>
      <div>
        <ButtonRow items={[{value: 4, onClick: onNumberClick},
                            {value: 5, onClick: onNumberClick},
                            {value: 6, onClick: onNumberClick},
                            {value: "-", onClick: onOperatorClick}]} />
      </div>
      <div>
        <ButtonRow items={[{value: 7, onClick: onNumberClick},
                            {value: 8, onClick: onNumberClick},
                            {value: 9, onClick: onNumberClick},
                            {value: "/", onClick: onOperatorClick}]} />
      </div>
      <div>
        <ButtonRow items={[{value: ".", onClick: onDecimalClick},
                            {value: 0, onClick: onNumberClick},
                            {value: "=", onClick: onEqualsClick},
                            {value: "*", onClick: onOperatorClick}]} />
      </div>
    </div>
  );
}

export default Calc;
