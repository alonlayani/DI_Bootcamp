# ==========================================================
# Week 1 - Day 2 - Exercises XP Gold
# ==========================================================


# ----------------------------------------------------------
# Exercise 1 : Hello World-I love Python
# Print the following output in one line of code:
# Hello world (x4)
# I love python (x4)
# ----------------------------------------------------------
print("Hello world\n" * 4 + "I love python\n" * 4, end="")


# ----------------------------------------------------------
# Exercise 2 : What is the Season ?
# Ask the user to input a month (1 to 12).
# Display the season of the month received:
# Spring: March (3) to May (5)
# Summer: June (6) to August (8)
# Autumn: September (9) to November (11)
# Winter: December (12) to February (2)
# ----------------------------------------------------------
month = int(input("Enter a month (1 to 12): "))

if 3 <= month <= 5:
    print("Spring")
elif 6 <= month <= 8:
    print("Summer")
elif 9 <= month <= 11:
    print("Autumn")
elif month == 12 or 1 <= month <= 2:
    print("Winter")
else:
    print("Invalid month, please enter a number between 1 and 12.")
