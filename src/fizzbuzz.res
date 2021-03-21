open Belt

let logNum = num => {
	let result = switch num {
	| num when mod(num, 15) == 0 => "FizzBuzz"
	| num when mod(num, 3) == 0 => "Fizz"
	| num when mod(num, 5) == 0 => "Buzz"
	| num => num->Int.toString
	}

	Js.log(result)
}

let rec _fizzbuzz = (current, until) => {
	switch (current, until) {
	| (a, b) when a == b => logNum(a)
	| (a, b) => {
			logNum(a)
			_fizzbuzz(a + 1, b)
		}
	}
}

let fizzbuzz = until => {
	switch until {
	| None => Js.log("Please, input a number to count to")
	| Some(num) => _fizzbuzz(1, num)
	}
}
