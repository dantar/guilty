#!/bin/bash
#set -v # do not expand variables
set -x # output
set -e # stop on error
set -u # stop if you use an uninitialized variable

TODAY=`date +%Y-%m-%d-%H-%M-%S`
echo $TODAY

cd ~/hack/git/guilty
ng build --base-href=./ --prod

rsync --delete -varzh ~/hack/git/guilty/dist/guilty/* ada-ubuntu-devel:/var/www/html/guilty/

