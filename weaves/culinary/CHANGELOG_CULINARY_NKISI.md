
# 🍴 Nkisi Culinary Cypher – Change Log

## v0.1 – Prototype (2025-04-17)
- Defined initial 256-entry lookup table (placeholder terms)
- Encoded Pop-Pop’s Pound Cake (basic 1-block version)
- Added classification system (001 = Recipe)

## v0.2 – Visual Cloth Encoding (2025-04-18)
- Introduced tone-based decoding system (base-3, 4-tone = 1 glyph)
- Created `Nkisi_Cloth_Decoder_Card.md`
- Rendered cloths for Pop-Pop’s Pound Cake and Crepes

## v0.3 – Stitching Logic (2025-04-18)
- Added multi-entry support in a single block using overflow rows
- Published `nkisi_memory_stitching_protocol.md`

## v0.4 – CUL_DICT Integration (2025-04-18)
- Loaded `CUL_DICT_01.csv` as structured source of culinary tokens
- Populated full 256-entry lookup with `ING_`, `ACT_`, `UNIT_`, `TEMP_`, `TIME_`

## v0.5 – Scientific Precision Mode (2025-04-18)
- Enforced mathematically accurate substitutions (e.g., 1 stick = 8 tbsp)
- Enabled multi-chunk, double-pass logic for encoding detailed steps
- Added missing tokens to vocabulary: `UNIT_STICK`, `TEMP_350F`, `ACT_SIFT`, `ACT_EAT`, etc.
- Created `recipe_block_structured_extended_final.json` using extended dictionary

## ✅ Required for Gen 2 Readiness:
- [x] Fully populated culinary lookup with precise unit logic
- [x] Double-pass encoding for glyph chains
- [x] Decoder and Stitching logic formalized
- [ ] ~~Versioned hash for each recipe row block~~ *(to be implemented)*
- [ ] ~~Nkisi visual glyph guide (for camera/NFC reading)~~ *(planned)*
- [ ] ~~Auto-differ system for glyphset evolution~~ *(planned)*

---

Curated by: Didier Akinlabi Nathan Osias  
Maintained by: PM Mama Nkisi  
Location: Kisantu Seed / weaves / culinary
