ng build
mv dist/index.html docs/index.html
uglifyjs dist/inline.bundle.js -o docs/inline.bundle.js
uglifyjs dist/main.bundle.js -o docs/main.bundle.js
uglifyjs dist/polyfills.bundle.js -o docs/polyfills.bundle.js
uglifyjs dist/styles.bundle.js -o docs/styles.bundle.js
uglifyjs dist/vendor.bundle.js -o docs/vendor.bundle.js
rm -r dist



