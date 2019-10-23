import stringToOperator from '../utils';

const calculate = (equation) => {
    const basicEquationLength = 3;
    if (equation.length === basicEquationLength) {
        const operator = equation[1];
        return stringToOperator[operator](equation[0], equation[2]);
    } else {
        if (equation.includes('/') || equation.includes('*')) {
            const loc = equation.findIndex((element) => (element === '/' || element === '*'));
            const equationBegining = equation.slice(0, loc - 1);
            const calcMiddle = [calculate(equation.slice(loc - 1, loc + 2))];
            const equationEnding = equation.slice(loc + 2 , equation.length);
            return calculate(equationBegining.concat(calcMiddle, equationEnding));
        } else {
            const calcBegining = [calculate(equation.slice(0, 3))];
            const equationEnding = equation.slice(3, equation.length);
            return calculate(calcBegining.concat(equationEnding));
        }
    }
  };
 
  export default calculate;