CUL_DICT = {
    "AAC": "salt", "BBA": "garlic", "CAB": "onion", "ACC": "oil",
    "AAA": "water", "CBB": "heat", "BAC": "stir", "ABC": "boil",
    "BCA": "crepe", "CCC": "memory", "ACB": "dream", "CBA": "family"
}

def decode_tones_to_text(codes):
    return [CUL_DICT.get(code, "[?]") for code in codes]

if __name__ == '__main__':
    input_codes = ["BCA", "AAA", "BAC"]
    print(f"🎼 Decoding: {' '.join(input_codes)}")
    decoded = decode_tones_to_text(input_codes)
    for c, word in zip(input_codes, decoded):
        print(f"  {c:5} → {word}")
