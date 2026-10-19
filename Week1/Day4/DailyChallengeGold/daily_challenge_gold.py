# ==========================================================
# Week 1 - Day 4 - Daily Challenge GOLD : Happy birthday
# ==========================================================
# Ask the user for their birthdate (DD/MM/YYYY).
# Display a little cake. The number of candles is the last digit of
# the user's age (53 years old -> 3 candles).
# Bonus: if they were born on a leap year, display two cakes!
# ----------------------------------------------------------
from datetime import date


def calculate_age(birth_date, today):
    age = today.year - birth_date.year
    if (today.month, today.day) < (birth_date.month, birth_date.day):
        age -= 1  # birthday not reached yet this year
    return age


def is_leap_year(year):
    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)


def build_cake(candles):
    # The candle line is 11 characters wide: "___iiiii___"
    candle_line = "i" * candles
    left = (11 - candles) // 2
    right = 11 - candles - left
    top = "_" * left + candle_line + "_" * right
    return (
        f"       {top}\n"
        "      |:H:a:p:p:y:|\n"
        "    __|___________|__\n"
        "   |^^^^^^^^^^^^^^^^^|\n"
        "   |:B:i:r:t:h:d:a:y:|\n"
        "   |                 |\n"
        "   ~~~~~~~~~~~~~~~~~~~"
    )


birthdate_input = input("Enter your birthdate (DD/MM/YYYY): ")
day, month, year = [int(part) for part in birthdate_input.split("/")]
birth_date = date(year, month, day)

age = calculate_age(birth_date, date.today())
candles = age % 10
print(f"You are {age} years old, here is your cake with {candles} candle(s)!")

cake = build_cake(candles)
print(cake)

if is_leap_year(year):
    print("You were born on a leap year, you get a second cake!")
    print(cake)
