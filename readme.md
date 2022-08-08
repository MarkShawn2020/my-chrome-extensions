# readme

## develop a chrome extension

ref:
- [API Reference - Chrome Developers](https://developer.chrome.com/docs/extensions/reference/)

- [GoogleChrome/chrome-extensions-samples: Chrome Extensions Samples](https://github.com/GoogleChrome/chrome-extensions-samples)
 

### start up
- [Getting started - Chrome Developers](https://developer.chrome.com/docs/extensions/mv3/getstarted/)


## recommended chrome plugins: `Reader View`

### 推荐语

> 你的注意力需要被拯救。

### 插件地址

![picture 8](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/mark-recmmended-chrome-plugins-1642960864811-f6b7fdaeaca7ce1de455563014d27f5719435016b0d37f681030780ca986955b.png)  

### 效果对比

在使用这个插件之前，会有很多信息（尤其是广告）会干扰你的阅读体验。

![picture 9](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/mark-recmmended-chrome-plugins-1642960902950-7bc86e2daefef8a064ff0b6b7a39b91eff42e54cc0913c62d32d3cc39e92cc0b.png)  

一键使用这个插件之后，网页将只保留主体内容，并且还提供丰富的可配置选项，包括背景色、宽度、高度等。

![picture 10](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/mark-recmmended-chrome-plugins-1642961066223-ec45109c545770c344a72497866597f06d72b14e087f8a6b4f7f0ac40638e39c.png)  

### 与safari阅读模式的对比

当然，这个功能，最早应该是safari推出的，也就是阅读模式，非常干净清爽。

![picture 11](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/mark-recmmended-chrome-plugins-1642961120699-ec45109c545770c344a72497866597f06d72b14e087f8a6b4f7f0ac40638e39c.png)  

不过考虑到我用chrome比较多，所以我是需要一款chrome平台的插件实现的（谷歌自己没有内置）。

好在令我欣慰的是，这个插件并没有让我失望，它比起safari阅读模式，有过之而无不及，试了它的几个功能，都非常强大合理。

1. 编辑模式，点击之后可以直接编辑目前网页上的文字，这个大有用处
2. 语音模式，自动朗诵，属于可能永远不用但不能没有的功能
3. 图片显示与关闭与调整大小，可以一键关闭所有图片，这个很多场景大有用处，降扰、排布等等
4. 笔记模式，可以生成便利贴，这个爱了爱了！
5. 全局模式，如果不提供这个选项的话，就要去触发浏览器的全局模式，就可能不符合自己的预期，我们需要一个与浏览器无关的沉浸式阅读模式，那就是这个全局模式的作用之地

:thumbsup:很棒！

## finished

### :white_check_mark: Chrome-text2md

- [x] G1：选中谷歌浏览器中的一句话，实现右键复制成md link（可以试着参考一下谷歌自带的“copy to highlight”）

- [x] G2：选中谷歌浏览器中的一大段话，实现右键复制成md link，并支持多种格式，包括进行部分压缩（以提供更好的可读性）
注：压缩就不做了，这次主要还是有谷歌自己的开源，不然还真做不了
