"""
Generates correctly-sized, clearly-labelled placeholder images for the Atang
site so the layout renders properly before real photography is supplied.
Filenames match exactly what the components reference under public/images/,
so dropping in a real photo with the same filename replaces the placeholder
automatically -- no code changes required.
"""

import os
from PIL import Image, ImageDraw, ImageFont

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "images")
os.makedirs(OUT_DIR, exist_ok=True)

TEAL = (14, 74, 68)
TEAL_DEEP = (11, 59, 54)
SAND = (239, 231, 220)
PEACH = (232, 183, 141)
CREAM = (246, 241, 234)


def font(size):
    try:
        return ImageFont.truetype(
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", size
        )
    except Exception:
        return ImageFont.load_default(size=size)


def gradient(w, h, c1, c2, vertical=True):
    img = Image.new("RGB", (w, h), c1)
    draw = ImageDraw.Draw(img)
    steps = h if vertical else w
    for i in range(steps):
        t = i / max(steps - 1, 1)
        r = int(c1[0] + (c2[0] - c1[0]) * t)
        g = int(c1[1] + (c2[1] - c1[1]) * t)
        b = int(c1[2] + (c2[2] - c1[2]) * t)
        if vertical:
            draw.line([(0, i), (w, i)], fill=(r, g, b))
        else:
            draw.line([(i, 0), (i, h)], fill=(r, g, b))
    return img


def bridge_mark(draw, cx, cy, w, color):
    """A tiny version of the brand arc, centred at (cx, cy), width w."""
    r = max(int(w * 0.06), 6)
    y = cy + int(w * 0.12)
    x1, x2 = cx - w // 2 + r, cx + w // 2 - r
    draw.line([(x1, y), (x2, y)], fill=color, width=max(int(w * 0.045), 4))
    # simple arc via arc bounding box
    bbox = [x1 - r, y - int(w * 0.45), x2 + r, y + int(w * 0.15)]
    draw.arc(bbox, start=200, end=340, fill=color, width=max(int(w * 0.045), 4))
    draw.ellipse([x1 - r, y - r, x1 + r, y + r], fill=color)
    draw.ellipse([x2 - r, y - r, x2 + r, y + r], fill=color)


def label(draw, w, h, lines, fg=CREAM, center_y=None):
    total_h = sum(f.size + 8 for f, _ in lines)
    y = center_y - total_h // 2 if center_y else h // 2 - total_h // 2
    for f, text in lines:
        bbox = draw.textbbox((0, 0), text, font=f)
        tw = bbox[2] - bbox[0]
        draw.text(((w - tw) / 2, y), text, font=f, fill=fg)
        y += f.size + 8


def make_hero(name, w, h, label_text):
    img = gradient(w, h, TEAL, TEAL_DEEP)
    draw = ImageDraw.Draw(img)
    bridge_mark(draw, w // 2, h // 2 - 40, min(w, h) * 0.5, PEACH)
    label(
        draw,
        w,
        h,
        [(font(22), "PLACEHOLDER IMAGE"), (font(15), label_text), (font(13), f"images/{name}")],
        fg=CREAM,
        center_y=int(h * 0.72),
    )
    img.save(os.path.join(OUT_DIR, name), quality=85)


def make_portrait(name, label_text):
    w, h = 800, 1000  # 4:5
    img = gradient(w, h, (43, 92, 86), TEAL_DEEP, vertical=True)
    draw = ImageDraw.Draw(img)
    # simple silhouette placeholder
    draw.ellipse([w / 2 - 110, 230, w / 2 + 110, 470], fill=(80, 120, 113))
    draw.ellipse([w / 2 - 190, 470, w / 2 + 190, 900], fill=(80, 120, 113))
    label(
        draw,
        w,
        h,
        [(font(22), "PLACEHOLDER PHOTO"), (font(16), label_text), (font(13), f"images/{name}")],
        fg=CREAM,
        center_y=h - 110,
    )
    img.save(os.path.join(OUT_DIR, name), quality=85)


def make_editorial(name, w, h, label_text, c1=SAND, c2=(200, 188, 172)):
    img = gradient(w, h, c1, c2)
    draw = ImageDraw.Draw(img)
    bridge_mark(draw, w // 2, h // 2 - 10, min(w, h) * 0.4, TEAL)
    label(
        draw,
        w,
        h,
        [(font(20), "PLACEHOLDER IMAGE"), (font(14), label_text), (font(12), f"images/{name}")],
        fg=TEAL,
        center_y=int(h * 0.74),
    )
    img.save(os.path.join(OUT_DIR, name), quality=85)


# Hero images (wide, dark teal — sit behind a dark overlay in the real
# layout so exact content doesn't matter much)
make_hero("true-family-sunset.jpg", 1920, 1080, "Home hero — a family at sunset")
make_hero("true-street.jpg", 1920, 900, "About hero — a street in Pretoria")
make_hero("advisor-meeting.jpg", 1920, 900, "About — advisor meeting")
make_hero("analysts.jpg", 1920, 900, "Clients hero — analysts reviewing data")
make_hero("true-skyline.jpg", 1920, 900, "Contact hero — city skyline")

# Editorial (lighter, used on cream/sand sections)
make_editorial("true-father-daughter.jpg", 1200, 900, "Home — father and daughter walking")

# Director portrait (4:5)
make_portrait("kamogelo.jpg", "Kamogelo Moisapula")

print("Placeholder images written to", os.path.abspath(OUT_DIR))
