harp compile .
rm www/deploy.sh
git add -A
git commit
git push
git push origin master:testing -f