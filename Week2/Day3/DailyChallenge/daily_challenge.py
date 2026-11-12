# ==========================================================
# Week 2 - Day 3 - Daily Challenge: Advanced Algorithm
# Find all the pairs of numbers that sum to the target number.
# ==========================================================
import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

target_number = 3728

# Efficient solution (O(n)): count every number, then for each distinct
# number look for its complement (target - number).
counts = {}
for number in list_of_numbers:
    counts[number] = counts.get(number, 0) + 1

pairs = []
for number in sorted(counts):
    complement = target_number - number
    if complement < number:
        continue  # this pair was already found (avoid duplicates)
    if complement == number and counts[number] >= 2:
        pairs.append((number, complement))
    elif complement != number and complement in counts:
        pairs.append((number, complement))

for a, b in pairs:
    print(f"{a} and {b} sums to the target_number {target_number}")
print(f"{len(pairs)} different pairs found.")
