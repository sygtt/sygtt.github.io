---
title: nodejsが複数インストールされている環境で既定のnodejsのバージョンを変更する
tags: 
    - Linux
    - nodejs
---

## 環境

Windows11のWSL2 (Ubuntu24.04)、nvmでnodejsをインストール。

<br>

## 方法

nodejsのv24系を既定としたい場合には、以下のコマンドを実行する。

<br>

```sh
nvm alias default 24
```

終わったら、ターミナルを開き直して、以下のコマンドで適切に設定できているか確認する。

```sh
node -v
nvm ls
```
