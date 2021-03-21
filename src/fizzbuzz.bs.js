// Generated by ReScript, PLEASE EDIT WITH CARE


function logNum(num) {
  var result = num % 15 === 0 ? "FizzBuzz" : (
      num % 3 === 0 ? "Fizz" : (
          num % 5 === 0 ? "Buzz" : String(num)
        )
    );
  console.log(result);
  
}

function _fizzbuzz(_current, until) {
  while(true) {
    var current = _current;
    if (current === until) {
      return logNum(current);
    }
    logNum(current);
    _current = current + 1 | 0;
    continue ;
  };
}

function fizzbuzz(until) {
  if (until !== undefined) {
    return _fizzbuzz(1, until);
  } else {
    console.log("Please, input a number to count to");
    return ;
  }
}

var FizzBuzz = {
  logNum: logNum,
  _fizzbuzz: _fizzbuzz,
  fizzbuzz: fizzbuzz
};

export {
  FizzBuzz ,
  
}
/* No side effect */
