def reverse_words(str)
    array = str.split(" ")
    new_arr = []
    array.each do |x|
    	new_arr << x.reverse
    end
    puts new_arr.join(" ")
end





describe "reverse_words" do
  it "does nothing to an empty string" do
    reverse_words("").should eq ""
  end

it "works for a simple sentence" do
    reverse_words("You must have at least one lowercase and one uppercase character").should eq "uoY tsum evah ta tsael eno esacrewol dna eno esacreppu .retcarahc"
  end
end


