---
title: みんなもbashに別れを告げて現代的環境に身を置こうか
tags:
    - Linux
    - zsh
---

私がモダンなシェルで生きるためにやったことのまとめ。

今まで昔ながらのbashしか知らなかったけど、めっちゃ快適になった。

## zshの導入

いろいろできるシェル、zshをインストールする。

Ubuntuなので、aptで入れられる。

```sh
sudo apt install zsh
```

インストールが終わったら `which zsh` できちんとインストールできているかの確認をして、デフォルトシェルをzshに変更する。

```sh
chsh -s $(which zsh)
```

ターミナルを再起動したらbashではなく、zshが起動してくるはず。

<br>

## oh-my-zshの導入

zshを管理しやすくする(?)ツール、oh-my-zshを導入する。

プラグインマネージャー的な役割を果たすらしい。

たくさんのプラグイン・テーマも同梱されているらしい。

まあ、詳しいことはよく分かっていないので、[公式サイト](https://ohmyz.sh/) を参考にしてほしい。

`curl` コマンドでインストールする。

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

<br>

## powerlevel10kの導入

さっき、「oh-my-zshにはたくさんのテーマが同梱されているよ！すごいね！」という話をしたばかりだが、oh-my-zshには同梱されていないテーマを導入する。

[powerlevel10k](https://github.com/romkatv/powerlevel10k) だ。インストールはこのGithubリポジトリのInstallation→Oh My Zshの部分を参照すればいい。

あ、そうだ忘れてた。このテーマをフル活用するには、Nerd fontが必須なので先にNerd fontをインストールしておこう。Nerd fontとは、めちゃ簡単にざっくりいうと、ターミナル上で使える絵文字が同梱されているフォントだ。

基本、[ここ](https://github.com/ryanoasis/nerd-fonts/blob/master/readme_ja.md#%E3%83%91%E3%83%83%E3%83%81%E6%B8%88%E3%81%BF%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88)に置いてあるものから好きなものを選んでインストールすれば良いと思うが、私の場合は私が愛してやまない[Moralerspace](https://github.com/yuru7/moralerspace)のArgonを導入した。

Nerd fontをインストールできたら、

```sh
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git "${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k"
```

これで引っ張ってきて、Homeディレクトリにあるzshの設定ファイル、`.zshrc` の`ZSH_THEME` の値を `"powerlevel10k/powerlevel10k"` に書き換えておく。簡単だね。

ターミナルを再起動したら、powerlevel10kが適応されて、対話型の設定画面が立ち上がるはず。

始めの方は適切に文字が表示されているかのチェック、そしてあとは好みの設定になるように設定していく。

<br>

## zshのプラグインの導入

ここからがzshの真髄。プラグインを導入していく。

今回導入するのは、zsh-syntax-highlighting、zsh-autosuggestions、copypath、copyfile、you-should-use。うん、そうだね。[参考サイト](https://qiita.com/flowernotfound/items/480f1aea319762aaf842)通りだね。参考サイトが優秀すぎたね。

で、copypathとcopyfileについてはoh-my-zshに同梱されているが、それ以外は外部のプラグインなので、まとめてコマンド打っておく。

```sh
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git \
  ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-autosuggestions \
  ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/MichaelAquilina/zsh-you-should-use.git \
  ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/you-should-use
```

そして、`.zshrc` の `plugins=(git)` と書かれているところに、スペース区切りでプラグイン名を書き加える、つまり `plugins=(git zsh-syntax-highlighting zsh-autosuggestions copypath copyfile you-should-use)` みたいにしてあげればOK。これまた簡単。

これ、特にzsh-syntax-highlightingとzsh-autosuggestionsが有能すぎて、もう手放せない。fishの構文ハイライト・サジェスト機能に寄せているらしいけど、fishはいろいろクセも強いしね。これがzshで使えるのは素晴らしい。

zshのプラグインについてはまだまだ発見できていない良いものがありそう。

oh-my-zshに同梱されているプラグインについては[ここ](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins)から確認できるし、同梱されていないものについては[ここ](https://qiita.com/mollifier/items/1220c0eeaa93e82f8afc)にまとめられているので、要チェック。

<br>

## zoxide (cdの進化形) の導入

ここからは標準のUnixコマンドを強化するようなツールの紹介をしていく。まずはzoxide。

一言で言うと、「`cd` のすごい版」である。

詳しい説明については[参考サイト](https://zenn.dev/h_ymt/articles/e4a07ca71fd1cb)を参照してほしいが、いつものcdをzに置き換えるだけ、つまり `z いきたいディレクトリ` と打つと飛び先を雑に打っても飛んでくれるようになる。

インストールしていく。

```sh
curl -sSfL https://raw.githubusercontent.com/ajeetdsouza/zoxide/main/install.sh | sh
```

を打って、`.zshrc` に

```zsh
eval "$(zoxide init zsh)"
```

を追加する。以上。詳しいことは[公式](https://crates.io/crates/zoxide)を参照してくれ。

<br>

## eza (lsの進化形) の導入

こいつは「`ls` のすごい版」である。

もう説明するのが疲れてきたので、これも詳しいことは[参考サイト](https://zenn.dev/akasan/articles/5870bda267256b)の説明を参照してほしいが、アイコン表示・ディレクトリを先にする表示方法・gitの情報まで表示する機能などなどいろいろついていて、標準の `ls` より見やすくなっている。ツリー表示とかもできる。特に、Ubuntuには `tree` コマンドが実装されていないので、エイリアンス張ってあげればいい感じになる。

今回は、とりあえず `l` にエイリアンスを張ってみる。

`.zshrc` に次の内容を追加。

```zsh
alias l='eza --icons --git --group-directories-first'
```

これで、いつもの `ls` の代わりに `l` を使うと、アイコン表示・ディレクトリを先にする表示・gitの情報の表示までやってくれる。

<br>

## まとめ

後半記事書くの疲れてきて力尽きたけど()

それでも、これだけやるだけで抜群にシェルの使い心地が変わる。

zshのプラグインでスペルミスに気付かず、目を細めて画面とにらめっこすることもなくなるし、`z` や `eza` ですいすいディレクトリを移動・確認できる。

みんなもbashを卒業してzshを使おう。モダンになろう。

<br>

## 参考にしたサイト

[生のターミナルから卒業しませんか？【oh-my-zsh】 <label>#</label>初心者 - Qiita](https://qiita.com/flowernotfound/items/480f1aea319762aaf842)

[【zsh】ターミナルをかわいくしたい！【powerlevel10k】 <label>#</label>WSL2 - Qiita](https://qiita.com/831kirimi/items/582e0abc26dbd7776d9b)

[cdコマンドを強化する zoxide でターミナル操作を快適にする](https://zenn.dev/h_ymt/articles/e4a07ca71fd1cb)

[コマンド紹介シリーズ：eza](https://zenn.dev/akasan/articles/5870bda267256b)

[【時短】zshでエイリアスを設定する方法 <label>#</label>Zsh - Qiita](https://qiita.com/terufumi1122/items/1bbb1cf96e376e30e9fc)
