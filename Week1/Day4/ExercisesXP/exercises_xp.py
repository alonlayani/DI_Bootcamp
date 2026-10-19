# ==========================================================
# Week 1 - Day 4 - Exercises XP
# ==========================================================


# ----------------------------------------------------------
# Exercise 1: Favorite Numbers
# Create a set called my_fav_numbers with your favorite numbers.
# Add two new numbers to the set.
# Remove the last number you added to the set.
# Create another set called friend_fav_numbers.
# Concatenate both sets into a new set called our_fav_numbers.
# ----------------------------------------------------------
my_fav_numbers = {7, 13, 21}
my_fav_numbers.add(42)
my_fav_numbers.add(99)
my_fav_numbers.remove(99)  # remove the last number added
print("My favorite numbers:", my_fav_numbers)

friend_fav_numbers = {3, 7, 10, 50}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print("Our favorite numbers:", our_fav_numbers)


# ----------------------------------------------------------
# Exercise 2: Tuple
# Given a tuple of integers, try to add more integers to the tuple.
# ----------------------------------------------------------
my_tuple = (1, 2, 3)
# Tuples are immutable: they can't be changed after creation,
# so there is no append() method and my_tuple[3] = 4 raises an error.
# The only way is to create a NEW tuple from the old one:
my_tuple = my_tuple + (4, 5)
print("New tuple:", my_tuple)


# ----------------------------------------------------------
# Exercise 3: List Manipulation
# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# Remove "Banana", remove "Blueberries", add "Kiwi" at the end,
# add "Apples" at the beginning, count "Apples", empty the list,
# print the final state of the list.
# ----------------------------------------------------------
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
print("Basket:", basket)
print("Number of Apples:", basket.count("Apples"))
basket.clear()
print("Final basket:", basket)


# ----------------------------------------------------------
# Exercise 4: Floats
# Recap: What is a float? Difference between a float and an integer?
# Create a list with: 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5
# without hard-coding each number.
# ----------------------------------------------------------
# A float is a number with a decimal part (e.g. 2.5).
# An integer is a whole number without a decimal part (e.g. 2).
numbers = []
for i in range(3, 11):        # 3 to 10
    value = i / 2             # 1.5, 2.0, 2.5, ... 5.0
    if value.is_integer():
        value = int(value)    # keep whole numbers as integers
    numbers.append(value)
print("Floats and integers:", numbers)


# ----------------------------------------------------------
# Exercise 5: For Loop
# Print all numbers from 1 to 20, inclusive.
# Print every number from 1 to 20 where the index is even.
# ----------------------------------------------------------
for number in range(1, 21):
    print(number)

numbers_1_to_20 = list(range(1, 21))
for index, number in enumerate(numbers_1_to_20):
    if index % 2 == 0:
        print(number)


# ----------------------------------------------------------
# Exercise 6: While Loop
# Ask the user for their name. With a while True loop, check that
# the name is proper (not digits and at least 3 letters long).
# If incorrect, keep asking. If correct, print "thank you" and break.
# ----------------------------------------------------------
while True:
    user_name = input("Enter your name: ")
    if user_name.isdigit() or len(user_name) < 3:
        print("Invalid name, please try again.")
    else:
        print("thank you")
        break


# ----------------------------------------------------------
# Exercise 7: Favorite Fruits
# Ask the user for their favorite fruits (separated by spaces)
# and store them in a list. Ask for the name of any fruit.
# If it is in the list -> "You chose one of your favorite fruits! Enjoy!"
# Otherwise -> "You chose a new fruit. I hope you enjoy it!"
# ----------------------------------------------------------
favorite_fruits = input("Enter your favorite fruits (separated by spaces): ").split()
chosen_fruit = input("Enter the name of any fruit: ")
if chosen_fruit in favorite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")


# ----------------------------------------------------------
# Exercise 8: Pizza Toppings
# Ask the user for pizza toppings one by one, stop on 'quit'.
# For each topping print "Adding [topping] to your pizza."
# After the loop print all toppings and the total cost.
# Base price $10, each topping adds $2.50.
# ----------------------------------------------------------
toppings = []
while True:
    topping = input("Enter a pizza topping (or 'quit' to finish): ")
    if topping.lower() == "quit":
        break
    toppings.append(topping)
    print(f"Adding {topping} to your pizza.")

total_cost = 10 + 2.5 * len(toppings)
print("Your toppings:", ", ".join(toppings))
print(f"Total cost: ${total_cost:.2f}")


# ----------------------------------------------------------
# Exercise 9: Cinemax Tickets
# Ask for the age of each family member and calculate the total:
# free under 3, $10 for 3 to 12, $15 for over 12.
# Bonus: restricted movie (ages 16-21 only): ask each person's age,
# remove anyone not allowed, print the final list of attendees.
# ----------------------------------------------------------
total_ticket_cost = 0
while True:
    age_input = input("Enter the age of a family member (or 'done' to finish): ")
    if age_input.lower() == "done":
        break
    age = int(age_input)
    if age < 3:
        total_ticket_cost += 0
    elif age <= 12:
        total_ticket_cost += 10
    else:
        total_ticket_cost += 15
print(f"Total ticket cost: ${total_ticket_cost}")

# Bonus
attendees = []
while True:
    teen_name = input("Enter a teenager's name (or 'done' to finish): ")
    if teen_name.lower() == "done":
        break
    teen_age = int(input(f"Enter {teen_name}'s age: "))
    attendees.append((teen_name, teen_age))

allowed_attendees = []
for teen_name, teen_age in attendees:
    if 16 <= teen_age <= 21:
        allowed_attendees.append(teen_name)
print("Final list of attendees:", allowed_attendees)
