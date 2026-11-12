# ==========================================================
# Week 2 - Day 4 - Daily Challenge: Challenges
# ==========================================================


# ----------------------------------------------------------
# Challenge 1: Sorting
# ----------------------------------------------------------
words = input("Enter words separated by commas: ")   # Step 1
word_list = words.split(",")                          # Step 2
word_list.sort()                                      # Step 3
result = ",".join(word_list)                          # Step 4
print(result)                                         # Step 5
# without,hello,bag,world -> bag,hello,without,world


# ----------------------------------------------------------
# Challenge 2: Longest Word
# ----------------------------------------------------------
def longest_word(sentence):
    words = sentence.split()
    longest = ""
    for word in words:
        if len(word) > len(longest):   # strictly greater -> first one wins
            longest = word
    return longest


print(longest_word("Margaret's toy is a pretty doll."))          # Margaret's
print(longest_word("A thing of beauty is a joy forever."))       # forever.
print(longest_word("Forgetfulness is by all means powerless!"))  # Forgetfulness
