#!/usr/bin/env python3
"""nkisi CLI – encode, decode, odù lookup
Usage:
  nkisi.py encode <text> [--out file.png]
  nkisi.py decode <image.png>
  nkisi.py lookup <figure>
"""
import sys, json, zlib, base64, argparse, pathlib
from PIL import Image
import numpy as np

REGISTRY = json.load(open(pathlib.Path(__file__).parent.parent / "data/odù_registry.json", encoding="utf-8"))

SYNC, NODE_ID, TTL = 0xFF, 0x00, 0x0F

def build_packet(msg: str) -> bytes:
    b = bytearray([SYNC, NODE_ID, TTL, len(msg)])
    b.extend(msg.encode("utf-8"))
    crc = 0
    for x in b:
        crc ^= x
    b.append(crc)
    return bytes(b)

def encode_grid(packet: bytes):
    pad = (-len(packet)) % 16
    packet += b'\x00' * pad
    num_panels = len(packet)//16
    grid = np.zeros((8, 16*num_panels), np.uint8)
    for idx, byte in enumerate(packet):
        p = idx //16
        q = idx %16
        r0 = (q//4)*2
        c0 = p*16 + (q%4)*4
        top, bot = byte>>4, byte & 0x0F
        for k in range(4):
            grid[r0,   c0+k] = (top>>(3-k)) &1
            grid[r0+1, c0+k] = (bot>>(3-k)) &1
    return grid

def save_png(grid, out):
    import matplotlib.pyplot as plt
    from matplotlib.colors import ListedColormap
    cmap = ListedColormap(["#5D3A00", "#D2B48C"])
    plt.figure(figsize=(grid.shape[1]/4,2))
    plt.imshow(grid, cmap=cmap, interpolation="nearest")
    plt.axis("off")
    plt.savefig(out, dpi=300, bbox_inches="tight")
    print("Saved", out)

def lookup(name):
    for obj in REGISTRY:
        if obj["figure"].lower()==name.lower():
            print(json.dumps(obj, ensure_ascii=False, indent=2))
            return
    print("Not found:", name)

def main():
    ap = argparse.ArgumentParser()
    sub = ap.add_subparsers(dest="cmd")
    enc = sub.add_parser("encode")
    enc.add_argument("text")
    enc.add_argument("--out", default="packet.png")
    dec = sub.add_parser("decode")
    dec.add_argument("image")
    lu = sub.add_parser("lookup")
    lu.add_argument("figure")
    args = ap.parse_args()

    if args.cmd=="encode":
        pkt = build_packet(args.text)
        grid = encode_grid(pkt)
        save_png(grid, args.out)
    elif args.cmd=="decode":
        print("Decode not yet implemented")
    elif args.cmd=="lookup":
        lookup(args.figure)
    else:
        ap.print_help()

if __name__=="__main__":
    main()
