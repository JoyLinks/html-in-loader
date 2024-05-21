const path = require('path');
const fs = require('fs');

const pattern1 = /<include.*?\/>/gi;
const pattern2 = /src=["']?([^'"]+)['"]?/i;

// html-include-loader
module.exports = function(source) {
	if (source) {
		source = includes(this, source);
	}
	this.callback(null, source);
};

function includes(ctx, text) {
	//console.log(ctx.rootContext);
	// D:\JOYZL\sites\joyzl
	//console.log(ctx.context);
	// D:\JOYZL\sites\joyzl\src

	return text.replace(pattern1, function(item) {
		let src = item.match(pattern2);
		if (src && src.length > 1) {
			src = src[1];
			if (src.startsWith("/")) {
				src = ctx.rootContext + src;
			} else if (src.startsWith("./")) {
				src = ctx.context + src.substr(1);
			} else {
				src = path.resolve(ctx.context, src);
			}

			if (fs.existsSync(src)) {
				ctx.addDependency(src);
				text = fs.readFileSync(src, {
					encoding: "utf-8"
				});
				return includes(ctx, text);
			} else {
				return "<!-- " + src + " -->";
			}
		}
	});
}