import json
import sys
from pathlib import Path

# Load dictionary from JSON
def load_dict(json_path='../CUL_DICT_REDUX.json'):
    try:
        with open(json_path, 'r') as f:
            data = json.load(f)
            return {entry['term']: entry['code'] for entry in data['dictionary']}
    except Exception as e:
        print(f"❌ Failed to load dictionary: {e}")
        return {}

# Encode text
def encode_text_to_tones(text, dictionary):
    tones = []
    for word in text.lower().split():
        code = dictionary.get(word, '---')
        tones.append((word, code))
    return tones

if __name__ == '__main__':
    input_text = " ".join(sys.argv[1:]) if len(sys.argv) > 1 else "crepe water stir"
    print(f"🔤 Encoding: {input_text}")
    cul_dict = load_dict()
    for word, tone in encode_text_to_tones(input_text, cul_dict):
        marker = "" if tone != "---" else " ⚠️ unknown"
        print(f"  {word:10} → {tone}{marker}")