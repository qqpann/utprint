# utprint
[![Build Status](https://travis-ci.org/qiugits/utprint.svg?branch=master)](https://travis-ci.org/qiugits/utprint)
[![npm](https://img.shields.io/npm/v/utprint.svg)](https://www.npmjs.com/package/utprint)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](./LICENSE)

全学計算機PaperCut Printのコマンドラインツール、Node.js版です。\
[GoogleChrome/puppeteer][puppeteer]を利用しています。

## Dependency
- `Node.js`, `npm`
- npm installしたbinにパスが通っていること
- 環境変数に`ZENGAKU_USERNAME`と`ZENGAKU_PASSWORD`、または`UTID_NAME`と`UTID_PASS`のいずれかの組み合わせでmanabaのユーザ名とパスワードを用意すること

## Install

```terminal
$ npm install utprint
```

## Usage

```terminal
$ utprint /Users/qiushi/Desktop/sample.pdf
```


`-v`オプションでHeadless Chromeモードを解除して描画させることができます。

```terminal
$ utprint -v /Users/qiushi/Desktop/sample.pdf
```


---


### Related projects
[shuuji3/manaba-attend](https://github.com/shuuji3/manaba-attend)\
[kajyuuen/Papercut-Submit](https://github.com/kajyuuen/Papercut-Submit)

#### Reference [統一認証システム](https://account.tsukuba.ac.jp/list.html)


[puppeteer]: https://github.com/GoogleChrome/puppeteer
