# CV online — Marcelo Torterolo

Landing page de CV, lista para GitHub Pages. HTML/CSS/JS vanilla, sin build step.

## Estructura

```text
/
├── index.html
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── img/ (foto, favicon)
├── cv-marcelo-torterolo.pdf   # CV descargable
└── README.md
```

## SEO

- `<title>` + meta description únicos, `meta robots`, `link canonical`
- Open Graph / Twitter Card con imagen (`foto.jpg`)
- Datos estructurados JSON-LD (`schema.org/Person`) con stack, ubicación y redes
- Jerarquía de encabezados real: `h1` en el hero, `h2` por sección (antes eran `<p>`, invisibles para buscadores)
- `robots.txt` + `sitemap.xml`
- Una vez publicado: dar de alta el sitio en [Google Search Console](https://search.google.com/search-console) y enviar el sitemap ahí — sin eso Google puede tardar semanas en indexarlo por su cuenta


## Deploy

Se sirve directo desde GitHub Pages (branch `main`, root). No requiere build.
