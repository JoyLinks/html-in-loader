# html-in-loader
WEBPACK html-include-loader
支持通过<include>标签包含HTML文件
```html
<include src="header.html" />
```
### 安装
```cmd
npm install html-loader --save-dev
npm install @joyzl/html-include-loader --save-dev
```

### 配置
webpack.config.js 中配置规则

```javascript
module: {
	rules: [{
		test: /\.html$/i,
		use: ['html-loader', '@joyzl/html-include-loader'],
	}]
}
```

尽情创建多页面吧！！！
