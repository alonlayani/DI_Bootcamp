# ==========================================================
# Week 2 - Day 2 - Daily Challenge GOLD: Solve the Matrix
# ==========================================================

MATRIX_STR = '''
7ir
Tsi
h%x
i ?
sM#
$a 
#t%'''


def build_matrix(matrix_str):
    """Step 1: string -> 2D list (each row padded to the same width)."""
    rows = [row for row in matrix_str.split("\n") if row]
    width = max(len(row) for row in rows)
    return [list(row.ljust(width)) for row in rows]


def read_columns(matrix):
    """Step 2: read the matrix column by column, top to bottom."""
    text = ""
    for col in range(len(matrix[0])):
        for row in range(len(matrix)):
            text += matrix[row][col]
    return text


def decode(text):
    """Steps 3-4: keep letters; a group of symbols BETWEEN two letters
    becomes a single space."""
    message = ""
    pending_space = False
    for char in text:
        if char.isalpha():
            if pending_space and message:
                message += " "
            message += char
            pending_space = False
        else:
            pending_space = True
    return message


matrix = build_matrix(MATRIX_STR)
decoded_message = decode(read_columns(matrix))
print(decoded_message)  # This is Matrix
