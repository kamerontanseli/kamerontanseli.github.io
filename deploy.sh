harp compile .
rm www/deploy.sh
git add -A
git commit -m "deploying"
git push
git push origin testing:master -f

git checkout master
ls