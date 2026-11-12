# ==========================================================
# Week 1 - Day 5 - Exercises XP (Dictionaries)
# ==========================================================


# ----------------------------------------------------------
# Exercise 1: Converting Lists into Dictionaries
# ----------------------------------------------------------
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

result = dict(zip(keys, values))
print(result)  # {'Ten': 10, 'Twenty': 20, 'Thirty': 30}


# ----------------------------------------------------------
# Exercise 2: Cinemax #2
# Under 3: free / 3 to 12: $10 / over 12: $15
# ----------------------------------------------------------
def ticket_price(age):
    if age < 3:
        return 0
    elif age <= 12:
        return 10
    else:
        return 15


family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0
for name, age in family.items():
    price = ticket_price(age)
    print(f"{name.title()} ({age} years old) pays ${price}")
    total_cost += price
print(f"Total cost for the family: ${total_cost}")

# Bonus: the user enters the family members
# (type 'quit' as the name to stop)
user_family = {}
while True:
    name = input("Enter a family member's name (or 'quit' to stop): ").strip()
    if name.lower() == "quit" or name == "":
        break
    age = int(input(f"Enter {name}'s age: "))
    user_family[name] = age

if user_family:
    user_total = 0
    for name, age in user_family.items():
        price = ticket_price(age)
        print(f"{name.title()} pays ${price}")
        user_total += price
    print(f"Total cost for your family: ${user_total}")


# ----------------------------------------------------------
# Exercise 3: Zara
# ----------------------------------------------------------
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": ["blue"],
        "Spain": ["red"],
        "US": ["pink", "green"],
    },
}

# 1. Change number_stores to 2
brand["number_stores"] = 2

# 2. Sentence describing Zara's clients
print(f"Zara's clients are {', '.join(brand['type_of_clothes'][:-1])} "
      f"and {brand['type_of_clothes'][-1]}.")

# 3. Add country_creation
brand["country_creation"] = "Spain"

# 4. Add "Desigual" to the competitors if the key exists
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

# 5. Delete creation_date
brand.pop("creation_date")

# 6. Last international competitor
print("Last competitor:", brand["international_competitors"][-1])

# 7. Major colors in the US
print("Major colors in the US:", brand["major_color"]["US"])

# 8. Number of keys
print("Number of keys:", len(brand))

# 9. All keys
print("Keys:", list(brand.keys()))

# Bonus: merge another dictionary
more_on_zara = {"creation_date": 1975, "number_stores": 10000}
brand.update(more_on_zara)
print(brand)


# ----------------------------------------------------------
# Exercise 4: Disney Characters
# ----------------------------------------------------------
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

# 1. character -> index
char_to_index = {name: index for index, name in enumerate(users)}
print(char_to_index)

# 2. index -> character
index_to_char = {index: name for index, name in enumerate(users)}
print(index_to_char)

# 3. sorted alphabetically, character -> index
sorted_char_to_index = {name: index for index, name in enumerate(sorted(users))}
print(sorted_char_to_index)
