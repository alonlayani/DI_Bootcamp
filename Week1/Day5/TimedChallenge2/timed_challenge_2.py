# ==========================================================
# Week 1 - Day 5 - Timed Challenge #2: Perfect number
# A perfect number equals the sum of its divisors (excluding itself).
# ==========================================================
x = int(input('Enter the Number:'))

divisors_sum = sum(d for d in range(1, x) if x % d == 0)
print(x > 0 and divisors_sum == x)
# 6  -> True  (1 + 2 + 3)
# 10 -> False
