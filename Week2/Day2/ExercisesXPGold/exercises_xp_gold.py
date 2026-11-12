# ==========================================================
# Week 2 - Day 2 - Exercises XP Gold (Functions)
# ==========================================================
import random

CURRENT_YEAR = 2026
CURRENT_MONTH = 11
CURRENT_DAY = 12


# ----------------------------------------------------------
# Exercise 1: When will I retire?
# Retirement age: 67 for men, 62 for women.
# ----------------------------------------------------------
def get_age(year, month, day):
    age = CURRENT_YEAR - year
    # birthday not reached yet this year
    if (month, day) > (CURRENT_MONTH, CURRENT_DAY):
        age -= 1
    return age


def can_retire(gender, date_of_birth):
    year, month, day = [int(part) for part in date_of_birth.split("/")]
    age = get_age(year, month, day)
    retirement_age = 67 if gender == "m" else 62
    return age >= retirement_age


gender = input("Enter your gender (m/f): ").strip().lower()
date_of_birth = input("Enter your date of birth (yyyy/mm/dd): ").strip()
if can_retire(gender, date_of_birth):
    print("You can retire!")
else:
    print("You can't retire yet.")


# ----------------------------------------------------------
# Exercise 2: Sum  X + XX + XXX + XXXX
# ----------------------------------------------------------
def sum_x(x):
    return sum(int(str(x) * i) for i in range(1, 5))


print(sum_x(3))  # 3702


# ----------------------------------------------------------
# Exercise 3: Double Dice
# ----------------------------------------------------------
def throw_dice():
    return random.randint(1, 6)


def throw_until_doubles():
    throws = 0
    while True:
        throws += 1
        if throw_dice() == throw_dice():
            return throws


def main():
    results = [throw_until_doubles() for _ in range(100)]  # a list keeps every result
    total = sum(results)
    print(f"Total throws: {total}")
    print(f"Average throws to reach doubles: {total / len(results):.2f}")


main()
