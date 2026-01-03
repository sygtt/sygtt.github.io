---
title: zshにpathを通す
tags:
    - zsh
---

## 経緯

bashからzshに移行して気付いた。

bashでは通っていたPATHが通っていない。

bashで通したPATHはzshで改めて通す必要があるという当たり前のことに気付いたので、zshでPATHを通す方法を調べた。

<br>

## 方法

`.zshrc` に次のコマンドを記述する。

```sh
export PATH=$PATH:＜追加したいパス＞
```

これだけ。簡単。

<br>

## 参考サイト

[bashで環境変数(PATH)の設定 <label>#</label>Linux - Qiita](https://qiita.com/iam1at/items/91cb8478160c9fbee134)

[zshにPATHを通す方法 <label>#</label>Mac - Qiita](https://qiita.com/shuissnow/items/94621e8bf9c939ba8986)
