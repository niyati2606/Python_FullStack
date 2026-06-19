class NegativeNumberError(Exception):
    """Raised when a negative number is not allowed."""
    def __init__(self, value):
        self.value = value
        super().__init__(f"Negative numbers are not allowed: {value}")

class TooLargeError(Exception):
    """Raised when a number exceeds the allowed limit."""
    def __init__(self, value, limit):
        self.value = value
        self.limit = limit
        super().__init__(f"{value} exceeds the maximum allowed value of {limit}")

def check_number(num):
    if num < 0:
        raise NegativeNumberError(num)
    if num > 100:
        raise TooLargeError(num, 100)
    print(f"{num} is valid.")

try:
    check_number(-5)
except NegativeNumberError as e:
    print(f"Custom Exception Caught: {e}")

try:
    check_number(150)
except TooLargeError as e:
    print(f"Custom Exception Caught: {e}")

try:
    check_number(50)
except (NegativeNumberError, TooLargeError) as e:
    print(f"Custom Exception Caught: {e}")
