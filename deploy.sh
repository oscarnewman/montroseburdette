#! /bin/sh
jekyll build \
&& git add -A \
&& git commit -m $0 \
&& git push
