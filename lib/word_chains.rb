# Phase 3

class WordChains

  def initialize(word, target)
    @words_to_expand = [word]
    @word = word
    @target = target
    @full_dictionary = File.read('dictionary.txt').split("\n")
    @candidate_words = same_length_words(word, @full_dictionary)
    @all_reachable_words = [word]
    @parents = Hash.new
  end

  def find_chain(source, target)
    @words_to_expand = [source]
    @candidate_words = same_length_words(source, @full_dictionary)
    current_word = nil

    until @words_to_expand.empty? || current_word == target
      current_word = @words_to_expand.shift
      adjacents = adjacent_words(current_word, @candidate_words)
      adjacents.each {|word| @parents[word] ||= current_word}
      @words_to_expand += adjacents - @words_to_expand
      @candidate_words.delete(current_word)
    end

    @parents
  end

  def build_path_from_breadcrumbs
    current_word = @target
    find_chain(@word, @target)
    path = []

    until current_word == @word
      path << current_word
      current_word = @parents[current_word]
    end

    path << current_word
    path.reverse
  end

  def same_length_words(word, dictionary)
    dictionary.select {|w| w.length == word.length}
  end

  def adjacent_words(word, dictionary)
    dictionary.select {|w| close_match?(word, w)}
  end

  def close_match?(word, candidate)
    counter = 0
    (0...word.length).each do |idx|
      counter += 1 if word[idx] == candidate[idx]
    end

    counter == word.length - 1
  end
end

new_game = WordChains.new("toast", "jelly")
p new_game.build_path_from_breadcrumbs