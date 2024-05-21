# html-in-loader
WEBPACK html-in-loader
支持通过<include>标签包含HTML文件
```html
<include src="header.html" />
```
### 安装
npm install html-loader --save-dev
npm install html-in-loader --save-dev

### 配置
webpack.config.js 中配置规则

```javascript
module: {
	rules: [{
		test: /\.html$/i,
		use: ['html-loader', 'html-in-loader'],
	}]
}
```

尽情创建多页面吧！！！