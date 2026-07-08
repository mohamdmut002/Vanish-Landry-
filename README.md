# Vanish Laundry — Website

Bilingual (Arabic / English) single-page website for **Vanish Laundry**, Saadiyat Island, Abu Dhabi.

## Structure

```
vanish-laundry-website/
├── index.html      # All page markup (Home + Menu views)
├── style.css        # All styling
├── script.js        # Language toggle, page switching, services/offers/branches/menu data & rendering
├── images/
│   └── vanish-whatsapp-qr.jpeg   # WhatsApp contact QR code
└── README.md
```

## Features

- **Bilingual toggle** — switches the whole site between Arabic (RTL) and English (LTR) instantly, no reload.
- **Two views, one page** — Home and the full Price List live in the same `index.html` and switch via JavaScript (`showPage()`), so it works as a single static page (perfect for GitHub Pages).
- **Full price menu** — tabbed by category (Household, Women, Men, Uni Sex, Kids, Towels, Shoes), sourced from the shop's printed brochure.
- **WhatsApp contact** — quick-chat button plus the shop's real WhatsApp QR code.
- **Google review link** — direct link for customers to leave a review.

## Running locally

No build step needed — it's plain HTML/CSS/JS.

1. Clone or download this repo.
2. Open `index.html` in a browser, or serve the folder with any static server, e.g.:
   ```bash
   npx serve .
   ```

## Deploying on GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Set **Source** to the `main` branch, root folder.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

## Notes

- Prices are transcribed from the shop's printed brochure (OCR) — double-check against the original brochure if you spot a discrepancy.
- The shop currently operates from a single location (Saadiyat Island).
