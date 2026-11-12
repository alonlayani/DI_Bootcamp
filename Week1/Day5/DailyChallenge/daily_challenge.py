# ==========================================================
# Week 1 - Day 5 - Daily Challenge: Dictionaries
# ==========================================================


# ----------------------------------------------------------
# Challenge 1: Letter Index Dictionary
# ----------------------------------------------------------
word = input("Enter a word: ")

letter_indexes = {}
for index, letter in enumerate(word):
    if letter in letter_indexes:
        letter_indexes[letter].append(index)
    else:
        letter_indexes[letter] = [index]

print(letter_indexes)
# "dodo"   -> {'d': [0, 2], 'o': [1, 3]}
# "froggy" -> {'f': [0], 'r': [1], 'o': [2], 'g': [3, 4], 'y': [5]}


# ----------------------------------------------------------
# Challenge 2: Affordable Items
# Items are bought in the dictionary's order (priority),
# the wallet is updated after each purchase.
# ----------------------------------------------------------
def clean_price(price):
    """'$1,000' -> 1000"""
    return int(price.replace("$", "").replace(",", ""))


def affordable_items(items_purchase, wallet):
    money = clean_price(wallet)
    basket = []
    for item, price in items_purchase.items():
        cost = clean_price(price)
        if cost <= money:
            basket.append(item)
            money -= cost
    if not basket:
        return "Nothing"
    return sorted(basket)


print(affordable_items({"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}, "$300"))
# ['Bread', 'Fertilizer', 'Water']
print(affordable_items({"Apple": "$4", "Honey": "$3", "Fan": "$14", "Bananas": "$4", "Pan": "$100", "Spoon": "$2"}, "$100"))
# ['Apple', 'Bananas', 'Fan', 'Honey', 'Spoon']
print(affordable_items({"Phone": "$999", "Speakers": "$300", "Laptop": "$5,000", "PC": "$1200"}, "$1"))
# Nothing
