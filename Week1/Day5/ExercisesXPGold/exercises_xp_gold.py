# ==========================================================
# Week 1 - Day 5 - Exercises XP Gold
# ==========================================================


# ----------------------------------------------------------
# Exercises 1, 2 & 3: Birthday Look-up / Advanced / Add your own
# ----------------------------------------------------------
birthdays = {
    "Alon": "1998/05/14",
    "Dana": "1995/11/02",
    "Yossi": "1990/01/23",
    "Maya": "2000/07/30",
    "Noam": "1997/03/09",
}

print("Welcome! You can look up the birthdays of the people in the list!")

# Exercise 3: add a new birthday first
new_name = input("Add a person - enter their name: ").strip()
new_birthday = input(f"Enter {new_name}'s birthday (YYYY/MM/DD): ").strip()
if new_name:
    birthdays[new_name] = new_birthday

# Exercise 2: show all the names before asking
print("People in the list:", ", ".join(birthdays.keys()))

name = input("Whose birthday do you want to know? ").strip()
if name in birthdays:
    print(f"{name}'s birthday is on {birthdays[name]}.")
else:
    print(f"Sorry, we don't have the birthday information for {name}")


# ----------------------------------------------------------
# Exercise 4: Fruit Shop
# ----------------------------------------------------------
items = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3,
}
for item, price in items.items():
    print(f"A {item} costs ${price}.")

items = {
    "banana": {"price": 4, "stock": 10},
    "apple": {"price": 2, "stock": 5},
    "orange": {"price": 1.5, "stock": 24},
    "pear": {"price": 3, "stock": 1},
}
total = 0
for item, info in items.items():
    total += info["price"] * info["stock"]
print(f"Buying everything in stock would cost ${total}")
