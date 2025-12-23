---
title: Quartz 4 を使って自分だけのデジタルガーデンをつくろう
tags: 
    - Quartz
---

## 私の悩み

自分の考え、やったことを素直に、適当に書ける場所ってどこだろう...

「誰かのため」というより自分が後から読み返して分かればいいんだよなぁ。。。

だから、きちんと「記事として書く」というより、メモ書き程度に書いてインターネット上に置いておきたい。

そうなると何を使えば良いんだ？ Zenn? note? Qiita? はてブロ? 使い分けを考えるのも面倒くさい。

あと、検索で簡単に出てきてしまっては誰かに読まれることを考えて書かなきゃって意識になるから、恥ずかしい。

見た目のカスタマイズもある程度自分の手でしてみたいなぁ

自分の情報は自分の手元で管理したいなー

→それじゃあ自分でつくってみるか

## どうやってつくるか

こういうサイトをつくるための選択肢はいくつかある。

生成AIに訊いたり、ググったりでいろいろ調べてみたが、Github + Jekyll の方法だと見た目のカスタマイズが面倒くさそうだし、ピンとくるテンプレートもなかった。

Astro + TailwindCSS は、自由度高そうだが、ハードルも高すぎて初心者の自分には勉強する気力も湧かなかった

そこで出会った Quartz。Obsidian Publish の代用としてつくられたものだが、別にObsidianを使わなくとも使えるらしい。

これでつくってみるかという気になった。

## つくりかた

といっても、公式ドキュメントと下記のサイトを参考につくっただけ。

[Welcome to Quartz 4](https://quartz.jzhao.xyz/)

[Quartz4で無料でObsidian Publishを代替する](https://masaki39.github.io/Quartz4%E3%81%A7%E7%84%A1%E6%96%99%E3%81%A7Obsidian-Publish%E3%82%92%E4%BB%A3%E6%9B%BF%E3%81%99%E3%82%8B)

## カスタマイズ

公式ドキュメントと上記記事に従えば、すぐサイトを公開できると思う。

そして、Quartzは非エンジニア向けにも扱いやすいようにつくってあるので、サイトのカスタマイズは公式ドキュメントを横目にtsファイルを少し書き換えるだけで、とてもやりやすくなっている。

ということで、ここからは私がカスタマイズした部分についてメモを残しておく。

### quartz.config.ts

まずは、`quartz.config.ts` をいじっていく。

[公式ドキュメント](https://quartz.jzhao.xyz/configuration) に各パラメータの意味が書いてあるので、これを見ながら書き換えていく。

変更したところを中心に置いておく。

```ts
const config: QuartzConfig = {
  configuration: {
    pageTitle: "じゃこの隠れ家",
    pageTitleSuffix: " - じゃこの隠れ家",
    locale: "ja-JP",
    baseUrl: "sygtt.github.io",
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "IBM Plex Sans JP",
        body: "IBM Plex Sans JP",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#FEFEFE",
          lightgray: "#F1F1F1",
          gray: "#E0E0E0",
          darkgray: "#2D2A2B",
          dark: "#2A2530",
          secondary: "#B31360",
          tertiary: "#F86EAE",
          highlight: "#FEEAF2",
          textHighlight: "#FDDDEE"
        },
        darkMode: {
          light: "#1A1A1A",
          lightgray: "#3C3C3C",
          gray: "#282828",
          darkgray: "#EAEAEA",
          dark: "#FFDBED",
          secondary: "#F86EAE",
          tertiary: "#FF99C8",
          highlight: "#3A2C33",
          textHighlight: "#522A40"
        },
      },
    },
  },

```

とくにこだわったところは色。何回も調整した。
マゼンタとサクラピンクベースで設定してみた。
この配色が一番好き。
読みやすいようになっていたらいいなぁ。
