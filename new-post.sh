echo "---
author: Kameron Tanseli
date: '$(date -u +"%Y-%m-%dT%H:%M:%SZ")'
title: '$1'
byline: \"\"
---
" > src/posts/$1.md

echo "created file at src/posts/$1.md"