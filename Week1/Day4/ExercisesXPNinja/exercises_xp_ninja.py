# ==========================================================
# Week 1 - Day 4 - Exercises XP Ninja
# ==========================================================
import math
import random


# ----------------------------------------------------------
# Exercise 1: Formula
# Q = Square root of [(2 * C * D)/H], with C = 50 and H = 30.
# Ask the user for a comma-separated string of numbers, use each
# number as D and print all the results.
# Example input: 100,150,180  ->  output: 18,22,24
# ----------------------------------------------------------
C = 50
H = 30
d_values = input("Enter comma-separated numbers: ").split(",")
results = []
for d in d_values:
    q = math.sqrt((2 * C * int(d)) / H)
    results.append(str(int(q)))
print(",".join(results))


# ----------------------------------------------------------
# Exercise 2 : List of integers
# Analyze a list of 10 integers (see instructions 1 to 15).
# ----------------------------------------------------------
numbers = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7]

# 2a. The list printed in a single line
print(*numbers)
# 2b. Sorted in descending order
print(sorted(numbers, reverse=True))
# 2c. The sum of all the numbers
print("Sum:", sum(numbers))
# 3. A list with the first and the last numbers
print("First and last:", [numbers[0], numbers[-1]])
# 4. Numbers greater than 50
print("Greater than 50:", [n for n in numbers if n > 50])
# 5. Numbers smaller than 10
print("Smaller than 10:", [n for n in numbers if n < 10])
# 6. All the numbers squared
print("Squared:", *[n ** 2 for n in numbers])
# 7. Numbers without duplicates + how many
unique_numbers = list(set(numbers))
print("Without duplicates:", unique_numbers, "- count:", len(unique_numbers))
# 8. The average
print("Average:", sum(numbers) / len(numbers))
# 9. The largest number
print("Largest:", max(numbers))
# 10. The smallest number
print("Smallest:", min(numbers))


# 11. Bonus: sum, average, largest, smallest without built-in functions
def analyze_without_builtins(values):
    total = 0
    count = 0
    largest = values[0]
    smallest = values[0]
    for value in values:
        total += value
        count += 1
        if value > largest:
            largest = value
        if value < smallest:
            smallest = value
    return total, total / count, largest, smallest


total, average, largest, smallest = analyze_without_builtins(numbers)
print(f"Manual -> sum: {total}, average: {average}, largest: {largest}, smallest: {smallest}")

# 12. Bonus: ask the user for 10 numbers between -100 and 100
user_numbers = []
while len(user_numbers) < 10:
    value = int(input(f"Enter an integer between -100 and 100 ({len(user_numbers) + 1}/10): "))
    if -100 <= value <= 100:
        user_numbers.append(value)
    else:
        print("Out of range, try again.")
print("Your numbers:", user_numbers)

# 13. Bonus: generate 10 random integers between -100 and 100
random_numbers = [random.randint(-100, 100) for _ in range(10)]
print("10 random numbers:", random_numbers)

# 14. Bonus: random amount of integers (no smaller than 50)
amount = random.randint(50, 100)
random_numbers = [random.randint(-100, 100) for _ in range(amount)]
print(f"{amount} random numbers -> sum: {sum(random_numbers)}, "
      f"average: {sum(random_numbers) / len(random_numbers):.2f}, "
      f"largest: {max(random_numbers)}, smallest: {min(random_numbers)}")

# 15. Bonus: Yes, the code works with any amount of numbers because it
# uses len() and loops instead of assuming there are exactly 10 numbers.


# ----------------------------------------------------------
# Exercise 3: Working on a paragraph
# Store a paragraph in a variable and print: characters, sentences,
# words, unique words.
# Bonus: non-whitespace characters, average words per sentence,
# non-unique words.
# ----------------------------------------------------------
paragraph = ("Python is a high-level, general-purpose programming language. "
             "Its design philosophy emphasizes code readability with the use of significant indentation. "
             "Python is dynamically typed and garbage-collected. "
             "It supports multiple programming paradigms, including structured, object-oriented and functional programming.")

sentences = [s for s in paragraph.replace("!", ".").replace("?", ".").split(".") if s.strip()]
words = paragraph.split()
clean_words = [w.strip(".,!?").lower() for w in words]
unique_words = set(clean_words)
non_whitespace = len("".join(paragraph.split()))
non_unique_words = len([w for w in unique_words if clean_words.count(w) > 1])

print(f"The paragraph contains {len(paragraph)} characters.")
print(f"The paragraph contains {len(sentences)} sentences.")
print(f"The paragraph contains {len(words)} words.")
print(f"The paragraph contains {len(unique_words)} unique words.")
print(f"Bonus: {non_whitespace} non-whitespace characters.")
print(f"Bonus: {len(words) / len(sentences):.2f} words per sentence on average.")
print(f"Bonus: {non_unique_words} words appear more than once.")


# ----------------------------------------------------------
# Exercise 4 : Frequency Of The Words
# Print the frequency of the words from the input, sorted.
# Input: New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3.
# ----------------------------------------------------------
sentence = input("Enter a sentence: ")
frequency = {}
for word in sentence.split():
    frequency[word] = frequency.get(word, 0) + 1
for word in sorted(frequency):
    print(f"{word}:{frequency[word]}")
