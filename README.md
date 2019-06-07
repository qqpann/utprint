Checkout utprint implemented desktop app: TsukubaMe → https://tsukuba-me.github.io

---

# utprint
[![Build Status](https://travis-ci.org/qiugits/utprint.svg?branch=master)](https://travis-ci.org/qiugits/utprint)
[![npm](https://img.shields.io/npm/v/utprint.svg)](https://www.npmjs.com/package/utprint)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](./LICENSE)

全学計算機PaperCut Printのコマンドラインツール、Node.js版です。\
[GoogleChrome/puppeteer][puppeteer]を利用しています。

> Inspired by [kajyuuen/Papercut-Submit](https://github.com/kajyuuen/Papercut-Submit)


## Dependency
- `Node.js`, `npm`
- npm installしたbinにパスが通っていること
- 環境変数に`ZENGAKU_USERNAME`と`ZENGAKU_PASSWORD`、または`UTID_NAME`と`UTID_PASS`のいずれかの組み合わせで全学のユーザ名とパスワードを用意すること

## Install

```terminal
$ npm install -g utprint
```

## Usage

```terminal
$ utprint sample.pdf
```


`-v`オプションでHeadless Chromeモードを解除して描画させることができます。

```terminal
$ utprint -v sample.pdf
```


---


### Related projects
[qiugits/atmnb](https://github.com/qiugits/atmnb) 同じくコマンドラインから、manaba出席を提出することができるツール

### Reference
[統一認証システム](https://account.tsukuba.ac.jp/list.html)


[puppeteer]: https://github.com/GoogleChrome/puppeteer
