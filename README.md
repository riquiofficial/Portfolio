# Portfolio

Website portfolio built on HTML and Tailwind CSS with vanilla JavaScript.

## Running Locally

A local server is required because the site uses `fetch()` to load project data.

```bash
# Install dependencies
npm install

# Start a local server
python3 -m http.server 8000
```

Then open http://localhost:8000

### CSS Development

When modifying Tailwind classes, run the CSS watcher in a separate terminal:

```bash
npm run watch:css
```

This recompiles `css/output.css` when you change HTML or `css/input.css`.
