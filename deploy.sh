git add -A
git commit
git push
git push origin testing:master -f

git branch -D master
git checkout master
git pull
harp compile .
ls | grep -v www | xargs rm -r
mv www/* .
rm -r www
git add -A
git commit -m "deploying"
git push -f
git checkout -