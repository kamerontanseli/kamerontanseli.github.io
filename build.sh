rm -r src/out
npm run build
npm run export
touch src/out/.nojekyll
npm run publish
echo "kamrn.com" > CNAME