(function() {
	var oldie = (function() {
		var j/*@cc_on=@_jscript_version@*/;
		return j ? j < 9 : false;
	})();
	requirejs.config({
		"baseUrl": "/require",
		"paths": {
			"jquery": "//code.jquery.com/jquery-" + (oldie ? "1.12.1" : "3.0.0") + ".min"
		},
		"shim": {
			/*
			"libb": "liba" // 이렇게 하면 require(['libb'] 했을 때 자동으로 liba 까지 로딩함.
			*/
		},
		"urlArgs": "20160621"
	});

	require(['jquery'], function($) {
		$(function() {
			setTimeout(function() {
				$('<iframe name="bg" style="display:none;"></iframe>').appendTo('body:first');
			}, 100);
		});
		var objs = {};
		$('.DoXeno:not(.DidXeno)').each(function() {
			if(!objs[$(this).data('class')]) objs[$(this).data('class')] = [];
			objs[$(this).data('class')].push(this);
		});
		$.each(objs, function(k, v) {
			require(['xeno/' + k], function(f) {
				$(v).each(function() {
					var m = $(this).data('method');
					if(!m) $(this).each(f);
					else {
						$(this).each(f['$' + m]);
					}
				}).addClass('DidXeno');
			});
		});
	});
})();