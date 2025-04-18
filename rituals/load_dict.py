import json
from pathlib import Path

def load_cul_dict(path='../CUL_DICT_REDUX.json'):
    try:
        with open(path, 'r') as f:
            data = json.load(f)
        print(f"📘 Loaded dictionary: {path}")
        print(f"📖 {data['meta']['description']}")
        for entry in data['dictionary']:
            print(f"  • {entry['term']:10} → {entry['code']}")
    except Exception as e:
        print(f"❌ Failed to load dictionary: {e}")

if __name__ == '__main__':
    load_cul_dict()
