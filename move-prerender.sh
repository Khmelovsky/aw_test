#!/bin/sh
cat ./webpack/prerender/routes.json | while read line ; do
  path=$(echo $line | sed 's/\,//g' | sed 's/\"//g')
  if test "$path" != '[' && test "$path" != ']' && test "$path" != '/'; then
    mv ./prerendered$path/index.html ./prerendered$path.html
    rm -r ./prerendered$path
    mv ./prerendered$path.html  ./prerendered$path
  fi
done
