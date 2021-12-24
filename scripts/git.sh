#!/bin/bash
# hacer commit en la rama de git

var=$(date)
var=`date`
echo "$var"

git add . && git commit -m "$var, commit changes" && git push
