Make sure to `npm i harp -g`

```sh
# Dev
harp server src

# Build
harp compile src dist

# Deploy
git subtree push --prefix dist origin gh-pages

# If getting an error with the previous deploy command
git push origin `git subtree split --prefix dist master`:gh-pages --force
```

How to deploy folder to gh-pages branch
https://gist.github.com/cobyism/4730490
