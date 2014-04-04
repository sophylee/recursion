def change_option(amt, coins)
  return [] if amt == 0

  change = []
  coin = coins.first
  remainder = amt % coin
  num_of_coins = amt / coin
  num_of_coins.times {change << coin}

  change += change_option(remainder, coins.drop(1))
  change
end

def make_change(amt, coins=[25, 10, 5, 1])
  possibles = []
  until coins.empty?
    possibles << change_option(amt, coins)
    coins.shift
  end
  possibles.sort_by { |x| x.length }.first
end