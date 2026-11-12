# ==========================================================
# Week 2 - Day 4 - Mini-Project #2: Hangman
# ==========================================================
import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference',
             'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist)

### YOUR CODE STARTS FROM HERE ###
BODY_PARTS = ["head", "body", "left arm", "right arm", "left leg", "right leg"]

GALLOWS = [
    "  +---+\n  |   |\n      |\n      |\n      |\n      |\n=========",
    "  +---+\n  |   |\n  O   |\n      |\n      |\n      |\n=========",
    "  +---+\n  |   |\n  O   |\n  |   |\n      |\n      |\n=========",
    "  +---+\n  |   |\n  O   |\n /|   |\n      |\n      |\n=========",
    "  +---+\n  |   |\n  O   |\n /|\\  |\n      |\n      |\n=========",
    "  +---+\n  |   |\n  O   |\n /|\\  |\n /    |\n      |\n=========",
    "  +---+\n  |   |\n  O   |\n /|\\  |\n / \\  |\n      |\n=========",
]


def hidden_word(word, guessed):
    """Stars for letters not found yet (spaces are shown)."""
    return "".join(c if c in guessed or c == " " else "*" for c in word)


def play(word):
    guessed = set()
    mistakes = 0
    print("Welcome to Hangman!")
    while mistakes < len(BODY_PARTS):
        print(GALLOWS[mistakes])
        print("Word:", hidden_word(word, guessed))
        if guessed:
            print("Letters already guessed:", ", ".join(sorted(guessed)))

        letter = input("Guess a letter: ").strip().lower()
        if len(letter) != 1 or not letter.isalpha():
            print("Please enter a single letter.")
            continue
        if letter in guessed:
            print("You already guessed that letter!")
            continue
        guessed.add(letter)

        if letter in word:
            print(f"Good job, '{letter}' is in the word!")
            if "*" not in hidden_word(word, guessed):
                print(f"You won! The word was: {word}")
                return True
        else:
            print(f"Sorry, no '{letter}'. The {BODY_PARTS[mistakes]} is added to the gallows.")
            mistakes += 1

    print(GALLOWS[mistakes])
    print(f"You lost! The word was: {word}")
    return False


if __name__ == "__main__":
    play(word)
