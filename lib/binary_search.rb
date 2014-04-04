def bsearch(array, target)
  return nil if array.empty?

  guess_index = array.length / 2
  guess = array[guess_index]

  if target == guess
    return guess_index
  elsif target < guess
    bsearch(array[0...guess_index], target)
  else
    guess_index + bsearch(array[(guess_index)..-1], target)
  end
end