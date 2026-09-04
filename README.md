# Nandhu Shree — Minimal 3D AI Portfolio

A lightweight, static, interactive portfolio focused on AI + Generative AI.

## Update content yourself

All portfolio content is in `js/data.js`.

To add a new achievement, copy an existing object in `achievements` and change the fields:

```js
{ title: "New Badge", subtitle: "What it represents", label: "2026", icon: "✦" }
```

To add a project, copy an existing object in `projects`:

```js
{
  number: "04",
  title: "My New Project",
  description: "One or two lines about it.",
  tags: ["AI", "GenAI"],
  link: "https://github.com/..."
}
```

No HTML editing is required for normal content updates.

## Run

Because this is plain HTML/CSS/JS, it can run on GitHub Pages, Cloudflare Pages, Netlify, Vercel, or a local static server.

For local development:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Notes

- Three.js is loaded from jsDelivr.
- The site automatically respects `prefers-reduced-motion`.
- Replace the placeholder LinkedIn/email values in `js/data.js` before publishing.
