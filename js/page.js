(function() {
	var Page = (function() {
		var __cache = {};

		function getHTML(url, cb) {
			var mainRgx = /<main[^>]*>((.|[\n\r])*)<\/main>/im;
			var oReq = new XMLHttpRequest();
			oReq.addEventListener("load", function() {
				cb(mainRgx.exec(this.responseText)[0]);
			});
			oReq.open("GET", url);
			oReq.send();
		}

		function renderPage(url) {
			if (typeof __cache[url] !== "undefined") {
				document.querySelector("main").outerHTML = __cache[url];
			} else {
				getHTML(url, function(html) {
					__cache[url] = html;
					renderPage(url);
				});
			}
		}

		function onPopState() {
			renderPage(location.href);
		}

		function onLink(url) {
			window.history.pushState({}, document.title, url);
			renderPage(url);
		}

		return {
			onPopState,
			onLink
		};
	})();

	window.addEventListener("popstate", function() {
		Page.onPopState();
	});

	document.addEventListener("click", function(e) {
		var el = e.target;
		if (el.tagName === "A" && el.origin === location.origin) {
			e.preventDefault();
			if (el.href !== window.location.href) {
				Page.onLink(el.href);
			}
		}
	});
})();
