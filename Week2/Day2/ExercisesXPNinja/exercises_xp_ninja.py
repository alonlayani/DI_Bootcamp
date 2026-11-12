# ==========================================================
# Week 2 - Day 2 - Exercises XP Ninja (Functions)
# ==========================================================


# ----------------------------------------------------------
# Exercise 1: What's your name?
# ----------------------------------------------------------
def get_full_name(first_name, last_name, middle_name=""):
    names = [first_name, middle_name, last_name]
    return " ".join(name.title() for name in names if name)


print(get_full_name(first_name="john", middle_name="hooker", last_name="lee"))  # John Hooker Lee
print(get_full_name(first_name="bruce", last_name="lee"))                       # Bruce Lee


# ----------------------------------------------------------
# Exercise 2: From English to Morse
# letters separated by a space, words separated by "/"
# ----------------------------------------------------------
MORSE = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
    '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.',
}
REVERSE_MORSE = {code: letter for letter, code in MORSE.items()}


def english_to_morse(text):
    words = text.upper().split()
    return " / ".join(" ".join(MORSE[c] for c in word if c in MORSE) for word in words)


def morse_to_english(code):
    words = code.split(" / ")
    return " ".join("".join(REVERSE_MORSE[c] for c in word.split()) for word in words)


morse = english_to_morse("Hello World")
print(morse)                    # .... . .-.. .-.. --- / .-- --- .-. .-.. -..
print(morse_to_english(morse))  # HELLO WORLD


# ----------------------------------------------------------
# Exercise 3: Box of stars
# ----------------------------------------------------------
def box_printer(*words):
    width = max(len(word) for word in words)
    print("*" * (width + 4))
    for word in words:
        print(f"* {word.ljust(width)} *")
    print("*" * (width + 4))


box_printer("Hello", "World", "in", "reallylongword", "a", "frame")


# ----------------------------------------------------------
# Exercise 4: What is the purpose of this code?
# ----------------------------------------------------------
def insertion_sort(alist):
    for index in range(1, len(alist)):
        currentvalue = alist[index]
        position = index
        while position > 0 and alist[position - 1] > currentvalue:
            alist[position] = alist[position - 1]
            position = position - 1
        alist[position] = currentvalue


alist = [54, 26, 93, 17, 77, 31, 44, 55, 20]
insertion_sort(alist)
print(alist)
# Purpose: this is the INSERTION SORT algorithm. It sorts the list in place,
# in ascending order: each element is taken one by one and shifted left
# until it reaches its correct position among the already-sorted elements.
# Output: [17, 20, 26, 31, 44, 54, 55, 77, 93]
