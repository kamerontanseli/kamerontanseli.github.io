harp compile .
rm www/deploy.sh
git add -A
git commit
git push
git push origin testing:master -f

git checkout master
ls | grep -v www | xarg rm -r
mv www/* .
git add -A
git commit -m "deploying"
git push -f