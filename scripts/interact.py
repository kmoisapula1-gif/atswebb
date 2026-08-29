from playwright.sync_api import sync_playwright

BASE = "http://localhost:8877"
OUT_DIR = "/home/claude/atang-website/qa"

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path="/opt/pw-browsers/chromium")
    page = browser.new_page(viewport={"width": 1280, "height": 900})

    # 1. Header "VERIFY A CALL" deep link -> governance member route
    page.goto(BASE + "/", wait_until="networkidle")
    page.click("text=VERIFY A CALL")
    page.wait_for_load_state("networkidle")
    page.wait_for_timeout(300)
    assert "route=member" in page.url, f"expected route=member in {page.url}"
    page.screenshot(path=f"{OUT_DIR}/verify-call-deeplink.png", full_page=True)

    # 2. Answer checklist: one contradicting answer -> red verdict
    page.click("text=Did they ask you for a payment, deposit or release fee? >> xpath=.. >> text=YES")
    page.wait_for_timeout(200)
    page.screenshot(path=f"{OUT_DIR}/checklist-red.png", full_page=True)

    # 3. Start again, answer all correctly -> green verdict
    page.click("text=Start again")
    page.wait_for_timeout(150)
    qas = [
        ("Did the caller give their full name and say they are from Atang Tracing Services?", "YES"),
        ("Did they name the fund or organisation that instructed them?", "YES"),
        ("Did they accept that you can call back on a number published on this site?", "YES"),
        ("Did they ask you for a payment, deposit or release fee?", "NO"),
        ("Did they ask for a PIN, banking password or one-time code?", "NO"),
    ]
    for q, ans in qas:
        row = page.locator(".check-row", has_text=q)
        row.get_by_text(ans, exact=True).click()
        page.wait_for_timeout(80)
    page.wait_for_timeout(200)
    page.screenshot(path=f"{OUT_DIR}/checklist-green.png", full_page=True)

    # 4. Accordion open on About
    page.goto(BASE + "/about/", wait_until="networkidle")
    page.click("text=We do not charge individuals to trace benefits")
    page.wait_for_timeout(200)
    page.screenshot(path=f"{OUT_DIR}/about-accordion-open.png", full_page=True)

    # 5. Clients: switch sector to admin, problem chip 3, open modal
    page.goto(BASE + "/clients/", wait_until="networkidle")
    page.click("text=ADMINISTRATORS & TRUSTEES")
    page.click("text=We have dormant records")
    page.wait_for_timeout(200)
    page.click("text=View sample reporting structure")
    page.wait_for_timeout(250)
    page.screenshot(path=f"{OUT_DIR}/clients-modal-open.png", full_page=True)
    # Escape should close modal
    page.keyboard.press("Escape")
    page.wait_for_timeout(200)
    modal_visible = page.locator(".modal-scrim").count()
    print("modal count after escape:", modal_visible)

    # 6. Contact: switch to verify-a-call route
    page.goto(BASE + "/contact/", wait_until="networkidle")
    page.click("text=Verify a call")
    page.wait_for_timeout(200)
    page.screenshot(path=f"{OUT_DIR}/contact-verify-route.png", full_page=True)

    browser.close()
    print("done")
