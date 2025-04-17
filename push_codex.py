# push_codex.py (v2) — Canon + Root Codex Sync

import os
import json
import zipfile

PATCH_DIR = "odu_patches"
ROOT_CODEX_PATH = "root_codex.json"
CANONICAL_ODO_PATH = "odu_directory.json"

def push_codex(zip_path):
    # Step 1: Extract zip into patch dir
    if not os.path.exists(PATCH_DIR):
        os.makedirs(PATCH_DIR)

    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        zip_ref.extractall(PATCH_DIR)

    # Step 2: Load patch files
    patch_data = []
    for filename in sorted(os.listdir(PATCH_DIR)):
        if filename.endswith(".json"):
            with open(os.path.join(PATCH_DIR, filename), 'r') as f:
                data = json.load(f)
                patch_data.append(data)

    # Step 3: Write canonical odù directory
    with open(CANONICAL_ODO_PATH, 'w') as f:
        json.dump(patch_data, f, indent=2)
    print(f"✅ Canon updated: {len(patch_data)} odù written to {CANONICAL_ODO_PATH}")

    # Step 4: Update root codex
    root_codex = {}
    if os.path.exists(ROOT_CODEX_PATH):
        with open(ROOT_CODEX_PATH, 'r') as f:
            root_codex = json.load(f)

    root_codex["odu_pairings"] = patch_data

    with open(ROOT_CODEX_PATH, 'w') as f:
        json.dump(root_codex, f, indent=2)
    print(f"🌱 Root Codex updated with odù pairings at {ROOT_CODEX_PATH}")

if __name__ == "__main__":
    push_codex("odu_patches_seed16.zip")
