# ==========================================================
# Week 2 - Day 4 - Challenges
# ==========================================================
import math


# Exercise 1: insert an item at a defined index in a list
def insert_at(lst, index, item):
    return lst[:index] + [item] + lst[index:]


print(insert_at([1, 2, 4, 5], 2, 3))  # [1, 2, 3, 4, 5]


# Exercise 2: count the spaces in a string
def count_spaces(text):
    return sum(1 for char in text if char == " ")


print(count_spaces("Do or do not there is no try"))  # 7


# Exercise 3: count upper case and lower case letters
def count_case(text):
    upper = sum(1 for c in text if c.isupper())
    lower = sum(1 for c in text if c.islower())
    return upper, lower


upper, lower = count_case("Hello World From Python")
print(f"Upper: {upper}, Lower: {lower}")  # Upper: 4, Lower: 16


# Exercise 4: sum without the built-in sum()
def my_sum(numbers):
    total = 0
    for n in numbers:
        total += n
    return total


print(my_sum([1, 5, 4, 2]))  # 12


# Exercise 5: max number in a list
def find_max(numbers):
    maximum = numbers[0]
    for n in numbers[1:]:
        if n > maximum:
            maximum = n
    return maximum


print(find_max([0, 1, 3, 50]))  # 50


# Exercise 6: factorial
def factorial(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result


print(factorial(4))  # 24


# Exercise 7: count an element without .count()
def list_count(lst, element):
    count = 0
    for item in lst:
        if item == element:
            count += 1
    return count


print(list_count(['a', 'a', 't', 'o'], 'a'))  # 2


# Exercise 8: L2-norm (square root of the sum of squares)
def norm(numbers):
    return math.sqrt(sum(n ** 2 for n in numbers))


print(norm([1, 2, 2]))  # 3.0


# Exercise 9: is the array monotonic?
def is_mono(arr):
    ascending = all(arr[i] <= arr[i + 1] for i in range(len(arr) - 1))
    descending = all(arr[i] >= arr[i + 1] for i in range(len(arr) - 1))
    return ascending or descending


print(is_mono([7, 6, 5, 5, 2, 0]))  # True
print(is_mono([2, 3, 3, 3]))        # True
print(is_mono([1, 2, 0, 4]))        # False


# Exercise 10: print the longest word in a list
def longest_word(words):
    longest = ""
    for word in words:
        if len(word) > len(longest):
            longest = word
    print(longest)


longest_word(["apple", "banana", "watermelon", "kiwi"])  # watermelon


# Exercise 11: split integers and strings into two lists
def split_types(items):
    integers = [x for x in items if isinstance(x, int)]
    strings = [x for x in items if isinstance(x, str)]
    return integers, strings


print(split_types([1, "a", 2, "hello", 3, "b"]))  # ([1, 2, 3], ['a', 'hello', 'b'])


# Exercise 12: palindrome
def is_palindrome(text):
    text = text.lower()
    return text == text[::-1]


print(is_palindrome('radar'))  # True
print(is_palindrome('John'))   # False


# Exercise 13: number of words longer than k
def sum_over_k(sentence, k):
    return sum(1 for word in sentence.split() if len(word) > k)


sentence = 'Do or do not there is no try'
print(sum_over_k(sentence, 2))  # 3


# Exercise 14: average value of a dictionary
def dict_avg(d):
    return sum(d.values()) / len(d)


print(dict_avg({'a': 1, 'b': 2, 'c': 8, 'd': 1}))  # 3.0


# Exercise 15: common divisors of 2 numbers (1 excluded, like the example)
def common_div(a, b):
    return [d for d in range(2, min(a, b) + 1) if a % d == 0 and b % d == 0]


print(common_div(10, 20))  # [2, 5, 10]


# Exercise 16: is the number prime?
def is_prime(n):
    if n < 2:
        return False
    for d in range(2, int(n ** 0.5) + 1):
        if n % d == 0:
            return False
    return True


print(is_prime(11))  # True


# Exercise 17: elements where the index AND the value are even
def weird_print(lst):
    result = [value for index, value in enumerate(lst) if index % 2 == 0 and value % 2 == 0]
    print(result)


weird_print([1, 2, 2, 3, 4, 5])  # [2, 4]


# Exercise 18: count the different types of keyword arguments
def type_count(**kwargs):
    counts = {}
    for value in kwargs.values():
        type_name = type(value).__name__
        counts[type_name] = counts.get(type_name, 0) + 1
    print(", ".join(f"{name}: {count}" for name, count in counts.items()))


type_count(a=1, b='string', c=1.0, d=True, e=False)  # int: 1, str: 1, float: 1, bool: 2


# Exercise 19: mimic str.split()
def my_split(text, separator=None):
    parts = []
    current = ""
    for char in text:
        is_sep = char.isspace() if separator is None else char == separator
        if is_sep:
            if current or separator is not None:
                parts.append(current)
            current = ""
        else:
            current += char
    if current or separator is not None:
        parts.append(current)
    return parts


print(my_split("Do or   do not"))     # ['Do', 'or', 'do', 'not']
print(my_split("a,b,,c", ","))        # ['a', 'b', '', 'c']


# Exercise 20: password format
def to_password(text):
    return "*" * len(text)


print(to_password("mypassword"))  # **********
