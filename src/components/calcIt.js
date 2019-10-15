const calcIt = (array) => {
    let loc = 0;
    if (array.length === 3) {
        if (array[1] === '+') { return (array[0] + array[2]); }
        if (array[1] === '-') { return (array[0] - array[2]); }
        if (array[1] === '/') { return (array[0] / array[2]); }
        if (array[1] === '*') { return (array[0] * array[2]); }
    } else {
        if (array.includes('/')) {
            loc = array.findIndex((element) => (element === '/'));
            return calcIt((array.slice(0, loc - 1)).concat(calcIt(array.slice(loc - 1, loc + 2)), array.slice(loc + 2 , array.length - 1)));
        } else if (array.includes('*')) {
            loc = array.findIndex((element) => (element === '*'));
            return calcIt((array.slice(0, loc - 1)).concat(calcIt(array.slice(loc - 1, loc + 2)), array.slice(loc + 2 , array.length - 1)));
        } else {
            return calcIt((calcIt(array.slice(0, 3))).concat(array.slice(3, array.length - 1)));
        }
    }
  };

  export default calcIt;