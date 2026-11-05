GREEN ATLANTIC PVC WEBSITE (greenatlanticpvc.com)

Upload everything in this folder to a new GitHub repo (for example
"greenatlantic-website"), connect it to Netlify, and point the domain at it,
the same way as pvcdirect.com. Keep the folders as they are.

ONE-TIME SETUP
The ~90 CAD drawings and PDFs still live on the old WordPress site.
In GitHub: Actions -> "Set up site" -> Run workflow.
It copies every file into this repo at its original address, so old links,
Google results and QR codes keep working. Do this BEFORE changing DNS.

FORMS
The Find a dealer, Become a dealer and Contact forms use Netlify Forms.
In Netlify: Forms -> enable form detection, then set up email
notifications to info@greenatlanticpvc.com.

UPDATING
Pages: index, products, cad (CAD & Documents), performance, about,
dealers (Where to Buy), contact. The CAD library list is js/data.js.
