# ==========================================================
# Week 1 - Day 2 - Exercises XP Ninja
# ==========================================================


# ----------------------------------------------------------
# Exercise 1 : Use the terminal
# Run "python3" in the terminal to open a python console.
# Read about the PATH variable. Explain why you can call python3
# if you aren't in the executable directory.
# ----------------------------------------------------------
# Answer:
# PATH is an environment variable containing a list of folders.
# When you type a command (like python3), the shell searches each
# folder listed in PATH, in order, for an executable with that name.
# Since the folder where python3 is installed (e.g. /usr/bin) is in
# PATH, the shell finds it from any directory.


# ----------------------------------------------------------
# Exercise 2 : Alias
# Read about alias, and try to open a python console with: $ py
# ----------------------------------------------------------
# Answer:
# An alias is a shortcut name for a command. On Mac/Linux:
#     alias py="python3"
# Add that line to ~/.bashrc or ~/.zshrc to keep it permanently.
# Now typing "py" opens the python console.
# (On Windows, the "py" launcher is installed with Python by default.)


# ----------------------------------------------------------
# Exercise 3 : Outputs
# Predict the output of the following code snippets.
# ----------------------------------------------------------
print(3 <= 3 < 9)                          # True
print(3 == 3 == 3)                         # True
print(bool(0))                             # False
print(bool(5 == "5"))                      # False
print(bool(4 == 4) == bool("4" == "4"))    # True
print(bool(bool(None)))                    # False

x = (1 == True)     # True  (True is equal to 1)
y = (1 == False)    # False
a = True + 4        # 5     (True counts as 1)
b = False + 10      # 10    (False counts as 0)

print("x is", x)
print("y is", y)
print("a:", a)
print("b:", b)


# ----------------------------------------------------------
# Exercise 4 : How many characters in a sentence ?
# Find out how many characters are in the text, using a single
# line of code (beyond the my_text variable).
# ----------------------------------------------------------
my_text = """Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
           Ut enim ad minim veniam, quis nostrud exercitation ullamco 
           laboris nisi ut aliquip ex ea commodo consequat. 
           Duis aute irure dolor in reprehenderit in voluptate velit 
           esse cillum dolore eu fugiat nulla pariatur. 
           Excepteur sint occaecat cupidatat non proident, 
           sunt in culpa qui officia deserunt mollit anim id est laborum."""

print(len(my_text))


# ----------------------------------------------------------
# Exercise 5 : Longest word without a specific character
# Keep asking the user to input the longest sentence they can
# without the character "A".
# Each time a user successfully sets a new longest sentence,
# print a congratulations message.
# ----------------------------------------------------------
longest = 0
print("Type the longest sentence you can without the letter 'A' (type 'quit' to stop).")

while True:
    sentence = input("Your sentence: ")
    if sentence.lower() == "quit":
        print(f"Game over! Your record is {longest} characters.")
        break
    if "a" in sentence.lower():
        print("Oops, your sentence contains an 'A'. Try again!")
    elif len(sentence) > longest:
        longest = len(sentence)
        print(f"Congratulations! New record: {longest} characters!")
    else:
        print(f"No 'A', but not longer than your record of {longest} characters.")
