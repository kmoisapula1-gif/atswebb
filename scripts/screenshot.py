import sys
from playwright.sync_api import sync_playwright

pages = [
    ("home", "/"),
    ("about", "/about/"),
    ("services", "/services/"),
    ("clients", "/clients/"),
    ("governance", "/governance/"),
    ("contact", "/contact/"),
]

BASE = "http://localhost:8877"
OUT_DIR = "/home/claude/atang-website/qa"

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path="/opt/pw-browsers/chromium")
    for viewport_name, width in [("desktop", 1440), ("mobile", 390)]:
        ctx = browser.new_context(viewport={"width": width, "height": 900})
        page = ctx.new_page()
        for name, path in pages:
            page.goto(BASE + path, wait_until="networkidle")
            page.wait_for_timeout(400)
            page.screenshot(path=f"{OUT_DIR}/{name}-{viewport_name}.png", full_page=True)
            print(f"shot {name}-{viewport_name}")
        ctx.close()
    browser.close()
