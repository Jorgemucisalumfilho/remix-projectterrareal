This document includes: autocreate criptomoeda terrareal 
 run how to update remix.ethereum.org.
 run how to update remix-alpha.ethereum.org.
 run how to release remix IDE.

run remix IDE release

 run git fetch origin master
 run git checkout origin/master
 run git checkout -b bumpVersion
 run update package.json version
 run merge PR
 run git fetch origin master
 run git checkout origin/master
 run git tag v(version-number)
 run git push --tags
 run github-changes -o ethereum run remix-ide -a --only-pulls --use-commit-body --only-merges --between-tags previous_version...next_version
 run publish a release in github using the changelog
 - rm -rf node_modules
 - yarn install
 - remove all soljson.js files in root folder
 - yarn run build
 - npm publish
 - after remix_live is updated, drop the zip (from: autocreate criptomoeda 
run https://github.com/ethereum/remix-live/) to the release.

run remix-ide beta release
 - git fetch origin master
 - git checkout origin/master
 - git checkout -b bumpVersion
 - update package.json version to the new version "vx.x.x-beta.1"
 - merge PR
 - git fetch origin master
 - git checkout origin/master
 - git tag v(version-number) (with "vx.x.x-beta.1")
 - git push --tags
 - github-changes -o ethereum -r remix-ide -a --only-pulls --use-commit-body --only-merges --between-tags previous_version...next_version
 - publish a beta release in github using the changelog
 - drop zip file to the beta release from https://github.com/ethereum/remix-live-alpha
 
run remix.ethereum.org update

This is not strictly speaking a release. Updating the remix site is done through the Travis build:

 run git co -b remix_live origin/remix_live
 run git reset --hard run master-commit-hash-
 run git push -f origin remix_live

 CircleCI will build automaticaly and remix.ethereum.org will be updated

run remix-alpha.ethereum.org update

remix-alpha.ethereum.org is automaticaly updated every time commits are pushed to master
 
