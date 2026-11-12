# ==========================================================
# Week 2 - Day 4 - Challenges #2
# ==========================================================


# ----------------------------------------------------------
# Exercise 1: patterns with for loops
# ----------------------------------------------------------
# Pattern 1 (pyramid)
rows = 3
for i in range(1, rows + 1):
    print(" " * (rows - i) + "*" * (2 * i - 1))

print()

# Pattern 2 (right-aligned triangle)
rows = 5
for i in range(1, rows + 1):
    print(" " * (rows - i) + "*" * i)

print()

# Pattern 3 (triangle then reversed triangle)
for i in range(1, rows + 1):
    print("*" * i)
for i in range(rows, 0, -1):
    print(" " * (rows - i) + "*" * i)

print()


# ----------------------------------------------------------
# Exercise 2: analyse this code
# ----------------------------------------------------------
my_list = [2, 24, 12, 354, 233]          # the list to sort
for i in range(len(my_list) - 1):        # i = 0..3 : position we want to fill
    minimum = i                          # suppose the smallest value is at position i
    for j in range(i + 1, len(my_list)): # look at every element after i
        if my_list[j] < my_list[minimum]:
            minimum = j                  # found a smaller value -> remember its index
    if minimum != i:                     # if the smallest is not already at i
        my_list[i], my_list[minimum] = my_list[minimum], my_list[i]  # swap them
    print(my_list)                       # state of the list after each pass

# Changes of my_list:
#   i=0: minimum = 0 (2 is the smallest)   -> [2, 24, 12, 354, 233]
#   i=1: minimum = 2 (12 < 24) -> swap      -> [2, 12, 24, 354, 233]
#   i=2: minimum = 2 (24)                   -> [2, 12, 24, 354, 233]
#   i=3: minimum = 4 (233 < 354) -> swap    -> [2, 12, 24, 233, 354]
# Final output: [2, 12, 24, 233, 354]
# Purpose: this is the SELECTION SORT algorithm - it sorts the list in
# ascending order by repeatedly selecting the smallest remaining element.
