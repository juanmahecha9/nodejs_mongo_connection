#!/bin/bash
npm run clean && npm run build && git add . &&  git commit -am "make it better" && git push heroku master
