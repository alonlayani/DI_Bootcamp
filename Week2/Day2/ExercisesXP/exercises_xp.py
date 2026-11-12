# ==========================================================
# Week 2 - Day 2 - Exercises XP (Functions)
# ==========================================================
import random


# ----------------------------------------------------------
# Exercise 1: What Are You Learning?
# ----------------------------------------------------------
def display_message():
    print("I am learning about functions in Python.")


display_message()


# ----------------------------------------------------------
# Exercise 2: What's Your Favorite Book?
# ----------------------------------------------------------
def favorite_book(title):
    print(f"One of my favorite books is {title}.")


favorite_book("Alice in Wonderland")


# ----------------------------------------------------------
# Exercise 3: Some Geography
# ----------------------------------------------------------
def describe_city(city, country="Unknown"):
    print(f"{city} is in {country}.")


describe_city("Reykjavik", "Iceland")
describe_city("Paris")


# ----------------------------------------------------------
# Exercise 4: Random
# ----------------------------------------------------------
def guess_random(number):
    if not 1 <= number <= 100:
        print("Please choose a number between 1 and 100.")
        return
    random_number = random.randint(1, 100)
    if number == random_number:
        print("Success!")
    else:
        print(f"Fail! Your number: {number}, Random number: {random_number}")


guess_random(50)


# ----------------------------------------------------------
# Exercise 5: Let's Create Some Personalized Shirts!
# ----------------------------------------------------------
def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is {text}.")


make_shirt()                                # large, default message
make_shirt("medium")                        # medium, default message
make_shirt("small", "Custom message")       # any size, other message
make_shirt(size="small", text="Hello!")     # bonus: keyword arguments


# ----------------------------------------------------------
# Exercise 6: Magicians...
# ----------------------------------------------------------
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']


def show_magicians(names):
    for name in names:
        print(name)


def make_great(names):
    # modifies the list in place
    for i in range(len(names)):
        names[i] = f"{names[i]} the Great"


make_great(magician_names)
show_magicians(magician_names)


# ----------------------------------------------------------
# Exercise 7: Temperature Advice
# ----------------------------------------------------------
def get_season(month):
    if month in (12, 1, 2):
        return "winter"
    elif month in (3, 4, 5):
        return "spring"
    elif month in (6, 7, 8):
        return "summer"
    else:
        return "autumn"


def get_random_temp(season=None):
    """Bonus: float temperature, range depends on the season."""
    ranges = {
        "winter": (-10, 16),
        "spring": (5, 25),
        "summer": (20, 40),
        "autumn": (5, 25),
    }
    low, high = ranges.get(season, (-10, 40))
    return round(random.uniform(low, high), 1)


def main():
    month = int(input("Enter a month (1-12): "))
    season = get_season(month)
    temp = get_random_temp(season)
    print(f"The temperature right now is {temp} degrees Celsius ({season}).")

    if temp < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif temp < 16:
        print("Quite chilly! Don't forget your coat.")
    elif temp < 24:
        print("Nice weather.")
    elif temp < 32:
        print("A bit warm, stay hydrated.")
    else:
        print("It's really hot! Stay cool.")


main()
