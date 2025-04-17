
import hashlib

# Local password
SECRET_PHRASE = "Team2508"

def encrypt(text):
    return hashlib.sha256(text.encode()).hexdigest()

def unlock(input_phrase):
    if encrypt(input_phrase) == encrypt(SECRET_PHRASE):
        return "✅ Ritual accepted. Mama Nkisi is listening."
    else:
        return "⛔ Incorrect key. Memory remains sealed."

# Example usage
if __name__ == "__main__":
    phrase = input("Enter ritual key: ")
    print(unlock(phrase))
