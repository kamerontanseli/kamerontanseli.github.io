harp compile .
rm www/deploy.sh
git add -A
git commit
git push
git push origin testing:master -f

git checkout master
git pull
ls | grep -v www | xargs rm -r
mv www/* .