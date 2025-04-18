def render_grid(rows=8, cols=16, fill='·'):
    print(f"🧵 Rendering {rows}×{cols} tone grid:")
    for _ in range(rows):
        print(' '.join([fill] * cols))

if __name__ == '__main__':
    render_grid()
