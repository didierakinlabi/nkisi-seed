#!/bin/bash

# === CONFIG ===
ZIP_FILE="Nkisi_GEN2_Woven_Audit.zip"
TARGET_DIR="./nkisi-seed/"

# === CHECKS ===
if [ ! -f "$ZIP_FILE" ]; then
  echo "❌ Zip file not found: $ZIP_FILE"
  exit 1
fi

if [ ! -d "$TARGET_DIR" ]; then
  echo "⚠️  Target directory not found: $TARGET_DIR"
  echo "Creating it now..."
  mkdir -p "$TARGET_DIR"
fi

# === EXTRACT & OVERWRITE ===
echo "🔄 Extracting $ZIP_FILE into $TARGET_DIR"
unzip -o "$ZIP_FILE" -d "$TARGET_DIR"

# === DONE ===
echo "✅ Nkisi GEN2 seed has been overwritten successfully."
