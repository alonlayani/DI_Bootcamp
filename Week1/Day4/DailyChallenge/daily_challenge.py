# ==========================================================
# Week 1 - Day 4 - Daily Challenge : Lists & Strings
# ==========================================================


# ----------------------------------------------------------
# Challenge 1: Multiples of a Number
# Ask the user for a number and a length.
# Generate a list of multiples of the number that stops when it
# reaches the given length.
# Example: number 7, length 5 -> [7, 14, 21, 28, 35]
# ----------------------------------------------------------
number = int(input("number: "))
length = int(input("length: "))

multiples = []
for i in range(1, length + 1):
    multiples.append(number * i)
print(multiples)


# ----------------------------------------------------------
# Challenge 2: Remove Consecutive Duplicate Letters
# Ask the user for a string and remove consecutive duplicate letters.
# Example: "ppoeemm" -> "poem", "wiiiinnnnd" -> "wind"
# Non-consecutive duplicates are allowed ("recursive" stays "recursive").
# ----------------------------------------------------------
word = input("user's word: ")

new_word = ""
for letter in word:
    if new_word == "" or letter != new_word[-1]:
        new_word += letter
print(new_word)
