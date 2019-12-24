rm -r src/out
npm run build
npm run export
touch src/out/.nojekyll
gh-pages --dist src/out --branch master --dotfiles true
