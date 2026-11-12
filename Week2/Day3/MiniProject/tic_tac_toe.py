# ==========================================================
# Week 2 - Day 3 - Mini-Project: Tic Tac Toe
# Two players take turns on a 3x3 board.
# ==========================================================


def create_board():
    """Step 1: a 3x3 board (2D list), every cell empty."""
    return [[" " for _ in range(3)] for _ in range(3)]


def display_board(board):
    """Step 2: print the board."""
    print("\n     1   2   3")
    for i, row in enumerate(board):
        print(f"  {i + 1}  " + " | ".join(row))
        if i < 2:
            print("    ---+---+---")
    print()


def player_input(board, player):
    """Step 3: ask for a row and a column, validate them, return (row, col)."""
    while True:
        move = input(f"Player {player}, enter row and column (e.g. 1 3): ").split()
        if len(move) != 2 or not all(part.isdigit() for part in move):
            print("Please enter two numbers separated by a space.")
            continue
        row, col = int(move[0]) - 1, int(move[1]) - 1
        if not (0 <= row < 3 and 0 <= col < 3):
            print("Row and column must be between 1 and 3.")
        elif board[row][col] != " ":
            print("This cell is already taken, choose another one.")
        else:
            return row, col


def check_win(board, player):
    """Step 4: rows, columns and both diagonals."""
    lines = []
    lines.extend(board)                                          # rows
    lines.extend([[board[r][c] for r in range(3)] for c in range(3)])  # columns
    lines.append([board[i][i] for i in range(3)])                # diagonal
    lines.append([board[i][2 - i] for i in range(3)])            # anti-diagonal
    return any(all(cell == player for cell in line) for line in lines)


def check_tie(board):
    """Step 5: the board is full."""
    return all(cell != " " for row in board for cell in row)


def switch_player(player):
    return "O" if player == "X" else "X"


def play():
    """Step 6: the main game loop."""
    print("Welcome to Tic Tac Toe!")
    board = create_board()
    player = "X"
    while True:
        display_board(board)
        row, col = player_input(board, player)
        board[row][col] = player
        if check_win(board, player):
            display_board(board)
            print(f"Player {player} wins! Congratulations!")
            break
        if check_tie(board):
            display_board(board)
            print("It's a tie!")
            break
        player = switch_player(player)


if __name__ == "__main__":
    play()
