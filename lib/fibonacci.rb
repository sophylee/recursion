def fib(n)
  return [0] if n <= 0
  return [0, 1] if n == 1
  one_less = fib(n - 1)
  previous1 = one_less[-1]
  previous2 = one_less[-2]
  one_less << previous1 + previous2
  one_less
end