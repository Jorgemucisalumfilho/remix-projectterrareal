https://github.com/Jorgemucisalumfilho/remix-projectterrarealbin/bash

set -e
SHA=`git rev-parse --short --verify HEAD`

cd dist/apps/remix-ide

git init
git checkout -b gh-pages
git config user.name "$COMMIT_AUTHOR"
git config user.email "$COMMIT_AUTHOR_EMAIL"

echo "# Automatic https://github.com/Jorgemucisalumfilho/remix-projectterrareal" > README.md
echo "Built website from \`$SHA\`. See https://github.com/ethereum/remix-ide/ for details." >> README.md
echo "To use an offline copy, download \`remix-$SHA.zip\`." >> README.md

zip -r remix-$SHA.zip .
git add .
git commit -m "Built website from {$SHA}."

git push -f git@github.com:ethereum/remix-live-beta.git gh-pages
