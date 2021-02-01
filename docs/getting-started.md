---
id: getting-started
title: Getting Started
---

Zulu Hotel for ModernUO is a custom set of functionality based on the old Penultima Online scripts that date back to 2003.

## Setup

**Tip:** To speed up load times you should clone the project to an SSD if you have one available.

You'll need to init the ModernUO git submodule when you first pull the project:

```bash
git clone git@github.com:ZuluHotelAustralia/zuluhotel.git
git submodule update --init --recursive
```

If you get a `(publickey)` error updating the submodules you can either setup [ssh-key git authentication](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) or rewrite the git url to https:

```bash
git config --global url."https://github.com/modernuo/ModernUO.git".insteadOf "git@github.com:modernuo/ModernUO.git"
```

### Building and running

#### Running locally

Change the `dataDirectories` entry in the `Distribution/Configuration/modernuo.json` to the root of your UO client installation directory (default is `/app/client/` for docker) e.g.

```json
  "dataDirectories": [
    "C:\\Program Files (x86)\\Ultima Online Classic\\"
  ],
```

Open a terminal in the root of the repository and build/publish the solution

```bash
dotnet publish
dotnet ModernUO/Distribution/ModernUO.dll
```

#### Running with docker

```bash
docker build . -t zuluhotelaustralia/zuluhotel
docker run --rm -it \
    --volume $HOME/zuluhotel/client/:/app/client/ \
    --volume $HOME/zuluhotel/Saves/:/app/Saves/ \
    -p 2593:2593 \
    zuluhotelaustralia/zuluhotel
```
