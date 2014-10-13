=begin
Psuedocode - 
1) Separate numbers from symbols into two arrays
2) Change numbers to floats
3) Perform loop equal to the number of times 
				OR 
  Each time an operand appears perform calculation on the last two digits in number array
  
4) 
5)
6)
7)
8)
=end



class RPNCalculator
     def initialize
       @numbers = []
    end  
    
 def evaluate (a)
  arr = a.split(" ")
  operations = []
  arr.each do |x|
    if x =~ /\d/
        @numbers << x.to_i
    else
        operations << x
        @numbers << @numbers.slice!(-2).send(operations.slice!(0), @numbers.slice!(-1))
    end
    end
    p @numbers[0]
end
end

calc = RPNCalculator.new
calc.evaluate('70 10 4 + 5 * -') # => 0
