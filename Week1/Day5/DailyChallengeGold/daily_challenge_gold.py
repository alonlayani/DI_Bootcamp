# ==========================================================
# Week 1 - Day 5 - Daily Challenge GOLD: Caesar Cypher
# ==========================================================


def caesar(text, shift):
    """Shift every letter by `shift` positions (wraps around the alphabet).
    Uppercase/lowercase are kept, other characters stay the same."""
    result = ""
    for char in text:
        if char.isalpha():
            base = ord("A") if char.isupper() else ord("a")
            result += chr((ord(char) - base + shift) % 26 + base)
        else:
            result += char
    return result


def encrypt(text, shift):
    return caesar(text, shift)


def decrypt(text, shift):
    return caesar(text, -shift)


choice = input("Do you want to (e)ncrypt or (d)ecrypt? ").strip().lower()
message = input("Enter your message: ")
shift = int(input("Enter the shift: "))

if choice.startswith("e"):
    print("Encrypted message:", encrypt(message, shift))
elif choice.startswith("d"):
    print("Decrypted message:", decrypt(message, shift))
else:
    print("Unknown choice, please type 'e' or 'd'.")
