rm -r src/out
npm run build
npm run export
touch src/out/.nojekyll
echo "kamrn.com" > CNAME
npm run publish