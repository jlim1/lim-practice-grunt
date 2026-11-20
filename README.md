# Grunt sidebar build

Open `html/index.html` and click **Toggle Menu** to open and close the sidebar. To rebuild, use Node.js 20+ and npm in this directory: run `npm ci --ignore-scripts` and then `npm run build`. This regenerates `html/css/main.css` and `html/js/toggle.min.js`.

Viewing needs only a browser. Rebuilding requires npm registry access for the first install. The lockfile pins the build tools; installed packages are not included.

Browser dependencies are included for offline practice. See `THIRD-PARTY-NOTICES.txt` for the upstream versions and licenses. These are course versions, not a production dependency recommendation.
