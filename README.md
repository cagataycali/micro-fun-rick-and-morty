# Rick & Morty Directory

4 find TODO's search entire codebase: `TODO: @cagataycali`


# Roadmap

- [ ] Write tests for character component fetch (jest.spyFetch)
- [ ] Write tests for Episode/Location renderLoadMoreButton
- [ ] Add infinitive scroll instead of button.
- [ ] Write tests for infinitive scroll
- [ ] Write tests for loadMore
- [ ] Prepare a pm2 starter for just POC purposes or just bash script to setup locally.
- [ ] Dockerize each project (staged dockerfiles for cache usage)
- [ ] Heroku || vercel deploy's
- [ ] Create .gitlab-ci.yml for each project (only changes deploys)
- [ ] Create .github/workflows/composer.yml for composer
- [ ] Create .github/workflows/fragment.yml for fragments
- [ ] Create deployment.yml with HPA and service.yml for k8s. (NodePort for each)

# Changelog

```
**commit 3abe77f20331ffdd7113f7d2efa818b99bb5984c**
Author: cagataycali <cagataycali@icloud.com>
Date:   Tue Mar 30 02:19:40 2021 +0300
🎉  Init codebase
```
![initial version of ui](./metadata/initial.png)


# Start Locally

```bash
# Install
./install.sh episode # in first terminal
./install.sh location # in second terminal

# Start
./start.sh episode # in first terminal
./start.sh location # in second terminal

# Start composer
cd composer
yarn dev

open http://localhost:8000
```


# Micro Frontend Fun (Not blazing fast)

This project is a template for your next micro-frontend project.

# Example usage:

https://github.com/cagataycali/micro-fun-example

# Usage of template

```bash
git clone git@github.com:cagataycali/micro-fun.git
```

# Scaffold a boilerplate for micro fragment

```bash
FUN_FRAGMENT_NAME=Header FUN_PORT=3000 ./copy.sh header
FUN_FRAGMENT_NAME=Footer FUN_PORT=3001 ./copy.sh footer
FUN_FRAGMENT_NAME=Avatar FUN_PORT=3002 ./copy.sh avatar

./install.sh header
./install.sh footer
./install.sh avatar
```

# Start

```bash
./start.sh footer # in first terminal
./start.sh header # in second terminal
./start.sh avatar # in third terminal

# Edit composer project for concatenate project (uncomment examples.)
cd composer
yarn dev
```
