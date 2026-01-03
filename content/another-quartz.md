---
title: 別のPCでQuartzをいじる
tags:
    - Quartz
---

## 経緯

私はここまで、自宅のデスクトップPCにQuartzの環境をつくって、記事を書いてきたが、外でも記事を書きたいなーと思ってきた。

ということで、別のPCでこのQuartzを編集する方法をまとめておく。

## 環境

Dynabook、Windows11のWSL2 (Ubuntu 24.04)

## 方法

### git cloneする

Quartzのリポジトリをcloneする。

私の場合だと、Githubの `sygtt.github.io` なので、以下のコマンドを実行。

```sh
git clone https://github.com/sygtt/sygtt.github.io.git
```

### node.jsのインストール

node.jsをインストールする。

[公式サイト](https://nodejs.org/ja/download)のコマンドを順にコピペしていくだけ。

### 依存パッケージのインストール

さっきcloneしてきたリポジトリにcdして、Quartzの依存パッケージをインストールする。

ちなみに、このあたりの用語を適切に使えているかは分からない。

まあ、後から自分で見返して分かるのであれば、いいや。

```sh
# さっきcloneしてきたリポジトリにcd
z sygtt.github.io

# Quartzの依存パッケージをインストール
npm install
```

これで完了。あとは、`content` ディレクトリ内に新しく記事を書いて、`npx quartz sync` で適切に更新できればOK。
