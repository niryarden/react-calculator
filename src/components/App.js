import React, {useState} from 'react';
import Button from './Button';
import Screen from './Screen';

const style = {
  'textAlign': 'center'
};

const calcIt = (calc) => {
  const result = 0;
  // check if the array which was given is valid
  for (let i = 0; i++; i<calc.length - 1) {
    if (i % 2 === 0) {
      if (typeof calc[i] !== 'number') { return 'error'; }
    }
    else {
      if (typeof calc[i] !== 'string') { return 'error'; }
    }
  }

  return result
};

function App() {
  const [prompt, setPrompt] = useState(0);
  const [calc, setCalc] = useState([]);
  console.log(calc)

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
  }

  const onDecimalClick = () => {
    if (typeof prompt == 'number') {
      setPrompt(String(prompt) + '.')
    } else {
      setPrompt('.');
    }
  }

  const onOperatorClick = (operator) => {
    if (typeof prompt == 'number') {
      setCalc([...calc, prompt, operator])
      setPrompt(operator);
    }
    else if (typeof prompt == 'string') {
      if (prompt[prompt.length - 1] === '.') {
        const new_prompt = Number(prompt + '0');
        setCalc([...calc, new_prompt, operator]);
        setPrompt(operator);
      } else {
        const new_calc = calc.slice();
        new_calc.pop();
        setCalc([...new_calc, operator]);
        setPrompt(operator);
      }
    }
  }

  const onEqualsClick = () => {
    if (typeof prompt == 'number') {
      setCalc([...calc, prompt]);
      const result = calcIt(calc);
      setPrompt(result);
    } else {
      setCalc([]);
      setPrompt('error');
    }
  }

  const onNewClick = () => {
    setCalc([]);
    setPrompt("");
  }

  return (
    <div style={style}>
      <div>
        <Screen prompt={prompt} />
        <Button value={"AC"} onClick={onNewClick} />
      </div>
      <div>
        <Button value={1} onClick={onNumberClick} />
        <Button value={2} onClick={onNumberClick} />
        <Button value={3} onClick={onNumberClick} />
        <Button value={"+"} onClick={onOperatorClick} />
      </div>
      <div>
        <Button value={4} onClick={onNumberClick} />
        <Button value={5} onClick={onNumberClick} />
        <Button value={6} onClick={onNumberClick} />
        <Button value={"-"} onClick={onOperatorClick} />
      </div>
      <div>
        <Button value={7} onClick={onNumberClick} />
        <Button value={8} onClick={onNumberClick} />
        <Button value={9} onClick={onNumberClick} />
        <Button value={"/"} onClick={onOperatorClick} />
      </div>
      <div>
        <Button value={"."} onClick={onDecimalClick} />
        <Button value={0} onClick={onNumberClick} />
        <Button value={"="} onClick={onEqualsClick} />
        <Button value={"*"} onClick={onOperatorClick} />
      </div>
    </div>
  );
}

export default App;
