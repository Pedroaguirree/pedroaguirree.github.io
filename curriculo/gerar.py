import pathlib
from playwright.sync_api import sync_playwright
aqui = pathlib.Path(__file__).resolve().parent
saida = aqui.parent / "assets" / "cv"
saida.mkdir(parents=True, exist_ok=True)
with sync_playwright() as p:
    b = p.chromium.launch()
    for html, pdf in (("curriculo.html", "curriculo-pedro-aguirre.pdf"), ("resume.html", "resume-pedro-aguirre.pdf")):
        pg = b.new_page()
        pg.goto((aqui / html).as_uri())
        pg.wait_for_load_state("networkidle")
        pg.pdf(path=str(saida / pdf), format="A4", print_background=True, prefer_css_page_size=True)
        print("gerado:", saida / pdf)
    b.close()
