def range(start_num, end_num)
  return [] if start_num > end_num
  return [end_num] if start_num == end_num
  answer = [start_num]
  answer += range(start_num + 1, end_num)
end

# recursive
def sum_rec(arr)
  return 0 if arr.empty?
  arr[0] + sum_rec(arr[1..-1])
end

# iterative
def sum_itr(arr)
  return 0 if arr.empty?
  sum = 0
  arr.each { |num| sum += num }
  sum
end

# p sum_itr([]) # 0
# p sum_itr([1]) # 1
# p sum_itr([1, 2]) # 3
# p sum_itr([1, 2, 3]) # 6


# tests
# p range(1, 1) # => [1]
# p range(1, 2) # => [1, 2]
# p range(1, 3) # => [1, 2, 3]
# p range(1, 4) # => [1, 2, 3, 4]
