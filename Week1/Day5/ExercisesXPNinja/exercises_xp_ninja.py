# ==========================================================
# Week 1 - Day 5 - Exercises XP Ninja
# ==========================================================


# ----------------------------------------------------------
# Exercise 1: Cars
# ----------------------------------------------------------
cars_string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
manufacturers = cars_string.split(", ")

print(f"There are {len(manufacturers)} manufacturers in the list.")
print("Z-A:", sorted(manufacturers, reverse=True))

with_o = [m for m in manufacturers if "o" in m.lower()]
print(f"{len(with_o)} manufacturers have the letter 'o' in their name.")

without_i = [m for m in manufacturers if "i" not in m.lower()]
print(f"{len(without_i)} manufacturers do not have the letter 'i' in their name.")

# Bonus: remove duplicates (keeping the original order)
with_duplicates = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
unique = []
seen = set()
for company in with_duplicates:
    if company not in seen:
        seen.add(company)
        unique.append(company)
print(", ".join(unique))
print(f"There are now {len(unique)} companies in the list.")

# Bonus: A-Z, with each name reversed
print([name[::-1] for name in sorted(unique)])
