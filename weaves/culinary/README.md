
# 🍴 Nkisi Weaves: Culinary Encoding Protocol

This folder contains tone-based memory cloths encoding ancestral recipes in the Nkisi format. Recipes are stored, decoded, and ritualized through the Nkisi Fractal Cypher System (NFCS).

---

## 🧠 Overview

Each recipe is:
- Encoded as a **16×16 tone grid**
- Each tone is base-3 (0, 1, 2) representing **Identity, Time, Spirit**
- Every 4 tones = 1 glyph → converted to a word via the culinary lookup table
- Multiple recipes are **stitched together** using memory overflow logic

---

## 📂 Files

### Lookup Table
- `nkisi_lookup_table_culinary_v1_full.json`  
A 256-entry vocabulary of ingredients, tools, steps, and rituals.

### Recipe Blocks
- `recipe_block_stitched_poundcake_crepes.json`  
Stitched memory block combining:
  - Pop-Pop’s Cold Oven Pound Cake  
  - Nutribullet Crepes

### Protocols
- `nkisi_memory_stitching_protocol.md`  
How to handle overflow and multi-entry cloths within a single tone grid.

### Scroll
- `nkisi_recipe_scroll.md`  
Human-readable record of all recipes, classifications, and tones.

---

## 🧵 Key Concepts

- **Cloth Block**: 16×16 tones = 1 visual memory field
- **Tone**: One of three colors or states (dark, medium, straw)
- **Glyph**: A chunk of 4 tones → base-3 decimal → vocabulary match
- **Classifier**: First glyphs define block type (e.g. `001` = recipe)

---

## 🔄 Stitching

When a recipe doesn’t fill a full block, the next recipe begins in the remaining space. This preserves space, continuity, and lineage.

See: `nkisi_memory_stitching_protocol.md`

---

## 🌿 Next Steps

- Add new recipes and scroll entries
- Expand vocabulary with fermentation, beverages, herbs
- Prepare `.weave` or `.nkisi` binary format
- Explore NFC or QR readout integration
