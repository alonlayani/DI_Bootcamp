# ==========================================================
# Week 1 - Day 2 - Exercises XP
# ==========================================================


# ----------------------------------------------------------
# Exercise 1: Hello World
# Print the following output using one line of code:
# Hello world
# Hello world
# Hello world
# Hello world
# ----------------------------------------------------------
print("Hello world\n" * 4, end="")


# ----------------------------------------------------------
# Exercise 2: Some Math
# Write code that calculates the result of:
# (99^3)*8 (meaning 99 to the power of 3, times 8).
# ----------------------------------------------------------
result = (99 ** 3) * 8
print(result)  # 7762392


# ----------------------------------------------------------
# Exercise 3: What is the output?
# Predict the output of the following code snippets.
# Comment what is your guess, then run the code and compare.
# ----------------------------------------------------------
print(5 < 3)               # Guess: False
print(3 == 3)              # Guess: True
print(3 == "3")            # Guess: False (int vs str)
# print("3" > 3)           # Guess: TypeError - can't compare str and int
try:
    print("3" > 3)
except TypeError as error:
    print("TypeError:", error)
print("Hello" == "hello")  # Guess: False (case sensitive)


# ----------------------------------------------------------
# Exercise 4: Your computer brand
# Create a variable called computer_brand which value is the
# brand name of your computer.
# Using the computer_brand variable, print a sentence:
# "I have a <computer_brand> computer."
# ----------------------------------------------------------
computer_brand = "Lenovo"
print(f"I have a {computer_brand} computer.")


# ----------------------------------------------------------
# Exercise 5: Your information
# Create variables name, age, shoe_size and info.
# info is a sentence that contains the 3 other variables.
# Print the info message.
# ----------------------------------------------------------
name = "Alon"
age = 25
shoe_size = 43
info = f"My name is {name}, I am {age} years old and I wear size {shoe_size} shoes, so I never trip over my code!"
print(info)


# ----------------------------------------------------------
# Exercise 6: A & B
# Create two variables, a and b. Each value is a number.
# If a is bigger than b, print "Hello World".
# ----------------------------------------------------------
a = 10
b = 5
if a > b:
    print("Hello World")


# ----------------------------------------------------------
# Exercise 7: Odd or Even
# Ask the user for a number and determine whether this
# number is odd or even.
# ----------------------------------------------------------
number = int(input("Enter a number: "))
if number % 2 == 0:
    print(f"{number} is even")
else:
    print(f"{number} is odd")


# ----------------------------------------------------------
# Exercise 8: What's your name?
# Ask the user for their name and determine whether or not
# you have the same name. Print a funny message.
# ----------------------------------------------------------
my_name = "Alon"
user_name = input("What's your name? ")
if user_name.strip().lower() == my_name.lower():
    print("No way! We have the same name, we must be twins separated at birth!")
else:
    print(f"Nice to meet you {user_name}! Too bad, '{my_name}' is clearly the cooler name.")


# ----------------------------------------------------------
# Exercise 9: Tall enough to ride a roller coaster
# Ask the user for their height in centimeters.
# If over 145 cm -> tall enough to ride.
# Otherwise -> need to grow some more.
# ----------------------------------------------------------
height = float(input("What is your height in cm? "))
if height > 145:
    print("You are tall enough to ride the roller coaster!")
else:
    print("Sorry, you need to grow some more to ride.")
