def is_fibonacci?(i)
  array = [0, 1]
  n = 0
  fib = 0
 
  while fib < i do 
    fib = array[n] + array[n+1]
    array.push(fib)
    n += 1
  end 
 
  fib == i ? true : false
end

def assert
  raise "Assertion failed!" unless yield
end

assert {is_fibonacci?(144) == true}
assert {is_fibonacci?(1596) == false}
assert {is_fibonacci?(610) == true}
assert {is_fibonacci?(5000) == false}
assert {is_fibonacci?(6600) == false}
assert {is_fibonacci?(6765) == true}
