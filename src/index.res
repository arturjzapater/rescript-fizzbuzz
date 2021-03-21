@bs.scope("process") @bs.val external argv: array<string> = "argv"

open Belt

argv[2]
-> Option.flatMap(Int.fromString)
-> Fizzbuzz.fizzbuzz
