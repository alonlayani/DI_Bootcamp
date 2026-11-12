# ==========================================================
# Week 2 - Day 2 - Timed Challenge #1: Count occurrence
# ==========================================================
string = input("String: ")
character = input("Character: ")

count = 0
for char in string:
    if char == character:
        count += 1
print(count)
# "Programming is cool!" / "o" -> 3
# "This is a great example" / "y" -> 0
