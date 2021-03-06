<template>
  <div class="start-up-container">
    <div class="content custom">
      <div class="start-up-first-line"></div>
      <h1 id="渠道中台门户简介">渠道中台门户简介</h1>
      <p>渠道中台门户是基于渠道中台，向接入方用户提供应用接入指南和文档查阅的开放平台。将你的服务接入渠道中台门户，有助于拓展新消费者。</p>
      <h1 id="小程序技术发展史">小程序技术发展史</h1>
      <p>​小程序并非凭空冒出来的一个概念。当微信中的 WebView 逐渐成为移动 Web 的一个重要入口时，微信就有相关的 JS API 了。</p>
      <p>​代码1-1是一个调用微信原生组件浏览图片的JS API，相比于额外引入一个JS图片预览组件库，这种调用方式显得非常简洁和高效。</p>
      <p>​实际上，微信官方是没有对外暴露过如此调用的，此类 API 最初是提供给腾讯内部一些业务使用，很多外部开发者发现了之后，依葫芦画瓢地使用了，逐渐成为微信中网页的事实标准。2015年初，微信发布了一整套网页开发工具包，称之为 JS-SDK，开放了拍摄、录音、语音识别、二维码、地图、支付、分享、卡券等几十个API。给所有的 Web 开发者打开了一扇全新的窗户，让所有开发者都可以使用到微信的原生能力，去完成一些之前做不到或者难以做到的事情。</p>
      <p>同样是调用原生的浏览图片，调用方式如代码清单1-2所示。</p>
      <p>​JS-SDK是对之前的 WeixinJSBridge 的一个包装，以及新能力的释放，并且由对内开放转为了对所有开发者开放，在很短的时间内获得了极大的关注。从数据监控来看，绝大部分在微信内传播的移动网页都使用到了相关的接口。</p>
      <p>​JS-SDK 解决了移动网页能力不足的问题，通过暴露微信的接口使得 Web 开发者能够拥有更多的能力，然而在更多的能力之外，JS-SDK 的模式并没有解决使用移动网页遇到的体验不良的问题。用户在访问网页的时候，在浏览器开始显示之前都会有一个的白屏过程，在移动端，受限于设备性能和网络速度，白屏会更加明显。我们团队把很多技术精力放置在如何帮助平台上的Web开发者解决这个问题。因此我们设计了一个 JS-SDK 的增强版本，其中有一个重要的功能，称之为“微信 Web 资源离线存储”。</p>
      <p>​以下文字引用自内部的文档（没有最终对外开放）：</p>
      <blockquote>
        <p>微信 Web 资源离线存储是面向 Web 开发者提供的基于微信内的 Web 加速方案。</p>
        <p>通过使用微信离线存储，Web 开发者可借助微信提供的资源存储能力，直接从微信本地加载 Web 资源而不需要再从服务端拉取，从而减少网页加载时间，为微信用户提供更优质的网页浏览体验。每个公众号下所有 Web App 累计最多可缓存 5M 的资源。</p>
      </blockquote>
      <p>​这个设计有点类似 HTML5 的 Application Cache，但在设计上规避了一些 Application Cache的不足。</p>
      <p>​在内部测试中，我们发现 离线存储 能够解决一些问题，但对于一些复杂的页面依然会有白屏问题，例如页面加载了大量的 CSS 或者是 JavaScript 文件。​除了白屏，影响 Web 体验的问题还有缺少操作的反馈，主要表现在两个方面：页面切换的生硬和点击的迟滞感。</p>
      <p>​微信面临的问题是如何设计一个比较好的系统，使得所有开发者在微信中都能获得比较好的体验。这个问题是之前的 JS-SDK 所处理不了的，需要一个全新的系统来完成，它需要使得所有的开发者都能做到：</p>
      <p>
        <em>- 快速的加载</em>
      </p>
      <p>
        <em>- 更强大的能力</em>
      </p>
      <p>
        <em>- 原生的体验</em>
      </p>
      <p>
        <em>- 易用且安全的微信数据开放</em>
      </p>
      <p>
        <em>- 高效和简单的开发</em>
      </p>
      <p>这就是小程序的由来。</p>
      <h1 id="小程序与普通网页开发的区别">小程序与普通网页开发的区别</h1>
      <p>​小程序的主要开发语言是 JavaScript ，小程序的开发同普通的网页开发相比有很大的相似性。对于前端开发者而言，从网页开发迁移到小程序的开发成本并不高，但是二者还是有些许区别的。</p>
      <p>​网页开发渲染线程和脚本线程是互斥的，这也是为什么长时间的脚本运行可能会导致页面失去响应，而在小程序中，二者是分开的，分别运行在不同的线程中。网页开发者可以使用到各种浏览器暴露出来的 DOM API，进行 DOM 选中和操作。而如上文所述，小程序的逻辑层和渲染层是分开的，逻辑层运行在 JSCore 中，并没有一个完整浏览器对象，因而缺少相关的DOM API和BOM API。这一区别导致了前端开发非常熟悉的一些库，例如 jQuery、 Zepto 等，在小程序中是无法运行的。同时 JSCore 的环境同 NodeJS 环境也是不尽相同，所以一些 NPM 的包在小程序中也是无法运行的。</p>
      <p>​网页开发者需要面对的环境是各式各样的浏览器，PC 端需要面对 IE、Chrome、QQ浏览器等，在移动端需要面对Safari、Chrome以及 iOS、Android 系统中的各式 WebView 。而小程序开发过程中需要面对的是两大操作系统 iOS 和 Android 的微信客户端，以及用于辅助开发的小程序开发者工具，小程序中三大运行环境也是有所区别的，如表1-1所示。</p>
      <p>​网页开发者在开发网页的时候，只需要使用到浏览器，并且搭配上一些辅助工具或者编辑器即可。小程序的开发则有所不同，需要经过申请小程序帐号、安装小程序开发者工具、配置项目等等过程方可完成。</p>
      <h1 id="体验小程序">体验小程序</h1>
      <p>开发者可使用微信客户端(6.7.2 及以上版本)扫码下方小程序码，体验小程序。</p>
      <p>
        <a
          href="https://github.com/wechat-miniprogram/miniprogram-demo"
          target="_blank"
          rel="noopener noreferrer"
        >
          查看小程序示例源码
          <span></span>
        </a>
      </p>
    </div>
    <div class="start-up-footer">
      <ul class="footer-list">
        <li>渠道中台门户联系人</li>
        <li>陈宫杰</li>
        <li>王可扬</li>
        <li>曹时杰</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  color: #3c434d;
  font-size: 20px;
  font-weight: 400;
  margin: 30px 0px;
}
h2 {
  color: #3c434d;
  font-size: 16px;
  font-weight: 100;
  line-height: 2em;
  margin-left: 0.2em;
}
p {
  font-size: 12px;
  line-height: 1.5em;
  margin-left: 0.4em;
}
.footer-list {
  display: flex;
  list-style: none;
  margin:0px;
  padding: 0px;
}
.footer-list li {
  margin-right: 16px;
}
.header-anchor {
  font-size: 0px;
}
.start-up-container {
  color: #657080;
  background-color: rgb(240, 242, 245);
  font-family: Helvetica;
  padding: 0px 50px;
}
.start-up-first-line {
  height: 10px;
}
.start-up-footer {
  border-top: 1px solid #eaecef;
  color: #586069;
  font-size: 12px;
  margin-top: 20px;
  padding-bottom: 10px;
  padding-top: 10px;
}
</style>