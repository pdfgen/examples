# PDFGen Examples

This repo contains two demonstrations of how to use PDFGen: one from a Node server and the other from the browser.

Start by installing dependencies:

```bash
# with npm
npm install

# or with yarn
yarn
```

Next, navigate to the directory you would like to demo and run it.

### Server Demo

Navigate to the `/server` directory.

```bash
cd server
npm run dev
```

This will call the PDFGen API right after running and will produce a PDF in the `/pdfs` directory.

### Browser Demo

Navigate to the `/browser` directory and use the `serve` command to run the `index.html` file in the browser. The page will be served at `localhost:3000` by default.

```bash
cd browser
serve
```

The page that is served at `localhost:3000` has a "Download" button. When clicked, it will call the PDFGen API and download a PDF for the user.

## License

MIT
