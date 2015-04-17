(function() {
	var oldie = (function() {
		var j/*@cc_on=@_jscript_version@*/;
		return j ? j < 9 : false;
	})();
	requirejs.config({
		"baseUrl": "/require",
		"paths": {
			"jquery": "//code.jquery.com/jquery-" + (oldie ? "1.11.2" : "2.1.3") + ".min"
		},
		"shim": {
			/*
			"libb": "liba" // 이렇게 하면 require(['libb'] 했을 때 자동으로 liba 까지 로딩함.
			*/
		}
	});
})();