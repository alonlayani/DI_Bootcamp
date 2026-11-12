# ==========================================================
# Week 1 - Day 5 - Exercises XP + (Dictionaries)
# ==========================================================


# ----------------------------------------------------------
# Exercise 1: Student Grade Summary
# ----------------------------------------------------------
student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72],
}

# Average grade for each student
student_averages = {}
for name, grades in student_grades.items():
    student_averages[name] = sum(grades) / len(grades)

# Letter grade for each student
student_letter_grades = {}
for name, avg in student_averages.items():
    if avg >= 90:
        letter = "A"
    elif avg >= 80:
        letter = "B"
    elif avg >= 70:
        letter = "C"
    elif avg >= 60:
        letter = "D"
    else:
        letter = "F"
    student_letter_grades[name] = letter

# Class average
class_average = sum(student_averages.values()) / len(student_averages)

for name in student_grades:
    print(f"{name:<8} Average = {student_averages[name]:.2f}, "
          f"Letter grade = {student_letter_grades[name]}")
print(f"Class average: {class_average:.2f}")


# ----------------------------------------------------------
# Exercise 2: Advanced Data Manipulation and Analysis
# ----------------------------------------------------------
sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]

# 1. Total sales per product
total_sales = {}
for sale in sales_data:
    revenue = sale["price"] * sale["quantity"]
    total_sales[sale["product"]] = total_sales.get(sale["product"], 0) + revenue
print("Total sales per product:", total_sales)

# 2. Total spent per customer
customer_spending = {}
for sale in sales_data:
    revenue = sale["price"] * sale["quantity"]
    customer_spending[sale["customer_id"]] = customer_spending.get(sale["customer_id"], 0) + revenue
print("Customer spending:", customer_spending)

# 3. Add total_price to each transaction
for sale in sales_data:
    sale["total_price"] = sale["price"] * sale["quantity"]
print("First transaction with total_price:", sales_data[0])

# 4. High-value transactions (> $500), sorted descending
high_value = [sale for sale in sales_data if sale["total_price"] > 500]
high_value.sort(key=lambda sale: sale["total_price"], reverse=True)
print("High-value transactions:")
for sale in high_value:
    print(f"  customer {sale['customer_id']} - {sale['product']} - ${sale['total_price']}")

# 5. Loyal customers (more than one purchase)
purchase_counts = {}
for sale in sales_data:
    purchase_counts[sale["customer_id"]] = purchase_counts.get(sale["customer_id"], 0) + 1
loyal_customers = [cid for cid, count in purchase_counts.items() if count > 1]
print("Loyal customers:", loyal_customers)

# Bonus: average transaction value per product
transactions_per_product = {}
for sale in sales_data:
    transactions_per_product[sale["product"]] = transactions_per_product.get(sale["product"], 0) + 1
average_transaction_value = {
    product: round(total_sales[product] / transactions_per_product[product], 2)
    for product in total_sales
}
print("Average transaction value per product:", average_transaction_value)

# Bonus: most popular product by quantity sold
quantity_sold = {}
for sale in sales_data:
    quantity_sold[sale["product"]] = quantity_sold.get(sale["product"], 0) + sale["quantity"]
most_popular = max(quantity_sold, key=quantity_sold.get)
print(f"Most popular product: {most_popular} ({quantity_sold[most_popular]} units)")

# Bonus: insights
# - Smartphones bring the most revenue: they deserve the biggest marketing budget.
# - Headphones sell the most units but are cheap: good for bundles
#   (e.g. smartphone + headphones) or upselling.
# - Every customer bought more than once: a loyalty program could keep them coming back.
