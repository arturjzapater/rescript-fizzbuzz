// Generated by ReScript, PLEASE EDIT WITH CARE


function logNum(num) {
  var result = num % 15 === 0 ? "FizzBuzz" : (
      num % 3 === 0 ? "Fizz" : (
          num % 5 === 0 ? "Buzz" : String(num)
        )
    );
  console.log(result);
  
}

function fizzbuzz(until) {
  if (until !== undefined) {
    var _current = 1;
    while(true) {
      var current = _current;
      if (current === until) {
        return logNum(current);
      }
      logNum(current);
      _current = current + 1 | 0;
      continue ;
    };
  } else {
    console.log("Please, input a number to count to");
    return ;
  }
}

export {
  fizzbuzz ,
  
}
/* No side effect */
