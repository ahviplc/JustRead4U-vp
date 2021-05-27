#!/usr/bin/env sh

set -e

npm run build

cd docs/.vuepress/dist

git init
git config --global user.name 'ahviplc'
git config --global user.email 'ahlc@sina.cn'
git add -A
git commit -m 'deploy'

git push
# git push -f git@github.com:ahviplc/JustRead4U-vp.git master:gh-pages

cd -
