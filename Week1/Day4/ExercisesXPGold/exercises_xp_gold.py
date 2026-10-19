# ==========================================================
# Week 1 - Day 4 - Exercises XP Gold
# ==========================================================
import random


# ----------------------------------------------------------
# Exercise 1: Concatenate lists
# Concatenate two lists together without using the + sign.
# ----------------------------------------------------------
list_one = [1, 2, 3]
list_two = [4, 5, 6]
list_one.extend(list_two)
print("Concatenated list:", list_one)


# ----------------------------------------------------------
# Exercise 2: Range of numbers
# Loop from 1500 to 2500 and print all multiples of 5 and 7.
# ----------------------------------------------------------
for number in range(1500, 2501):
    if number % 5 == 0 and number % 7 == 0:
        print(number)


# ----------------------------------------------------------
# Exercise 3: Check the index
# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
# Ask a user for their name; if it is in the list, print the index
# of its first occurrence.
# ----------------------------------------------------------
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
user_name = input("What is your name? ")
if user_name in names:
    print(names.index(user_name))
else:
    print(f"{user_name} is not in the list.")


# ----------------------------------------------------------
# Exercise 4: Greatest Number
# Ask the user for 3 numbers and print the greatest number.
# ----------------------------------------------------------
first = float(input("Input the 1st number: "))
second = float(input("Input the 2nd number: "))
third = float(input("Input the 3rd number: "))
greatest = max(first, second, third)
if greatest.is_integer():
    greatest = int(greatest)
print("The greatest number is:", greatest)


# ----------------------------------------------------------
# Exercise 5: The Alphabet
# Create a string of all the letters in the alphabet.
# Loop over each letter and print whether it's a vowel or a consonant.
# ----------------------------------------------------------
alphabet = "abcdefghijklmnopqrstuvwxyz"
vowels = "aeiou"
for letter in alphabet:
    if letter in vowels:
        print(f"{letter} is a vowel")
    else:
        print(f"{letter} is a consonant")


# ----------------------------------------------------------
# Exercise 6: Words and letters
# Ask the user for 7 words, store them in a list named words.
# Ask for a single character, store it in a variable called letter.
# Print the index of the first appearance of letter in each word,
# or a friendly message if the letter isn't in the word.
# ----------------------------------------------------------
words = []
for i in range(1, 8):
    words.append(input(f"Enter word {i}/7: "))

letter = input("Enter a single character: ")
for word in words:
    if letter in word:
        print(f"'{letter}' first appears at index {word.index(letter)} in '{word}'")
    else:
        print(f"Sorry, the letter '{letter}' is not in the word '{word}'")


# ----------------------------------------------------------
# Exercise 7: Min, Max, Sum
# Create a list of numbers from one to one million, check min()
# and max(), and use sum() to add them.
# ----------------------------------------------------------
million_numbers = list(range(1, 1_000_001))
print("Min:", min(million_numbers))
print("Max:", max(million_numbers))
print("Sum:", sum(million_numbers))


# ----------------------------------------------------------
# Exercise 8 : List and Tuple
# Accept a sequence of comma-separated numbers and generate a list
# and a tuple which contain every number.
# Input: 34,67,55,33,12,98
# ----------------------------------------------------------
sequence = input("Enter comma-separated numbers: ")
numbers_list = sequence.split(",")
numbers_tuple = tuple(numbers_list)
print(numbers_list)
print(numbers_tuple)


# ----------------------------------------------------------
# Exercise 9 : Random number
# Ask the user for a number from 1 to 9 and compare it with a
# random number between 1 and 9: "Winner" or "better luck next time".
# Bonus: keep guessing until the user wants to quit.
# Bonus 2: display total games won and lost at the end.
# ----------------------------------------------------------
games_won = 0
games_lost = 0
while True:
    guess = input("Guess a number from 1 to 9 (or 'quit' to stop): ")
    if guess.lower() == "quit":
        break
    random_number = random.randint(1, 9)
    if int(guess) == random_number:
        print("Winner")
        games_won += 1
    else:
        print(f"Better luck next time (the number was {random_number})")
        games_lost += 1

print(f"Games won: {games_won}")
print(f"Games lost: {games_lost}")
