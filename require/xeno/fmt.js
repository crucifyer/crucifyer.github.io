/* vim: set expandtab tabstop=4 shiftwidth=4: */
// +--------------------------------------------------------+
// | Copyright : Song Hyo-Jin <shj at xenosi.de>            |
// +--------------------------------------------------------+
// | Number Formatter                                       |
// +--------------------------------------------------------+
// | License : MIT                                          |
// +--------------------------------------------------------+
//
// $Id: fmt.js, 2015. 3. 14. crucify Exp $

define(function() {
	var fmt = {
		toInt: function(s) {
			var pm = /^-/.test(s) ? -1 : 1;
			return s.replace(/\..*$/g, '').replace(/[^\d]/g, '') * pm;
		},
		$int: function() {
			$(this).text(fmt.toInt($(this).text()));
		},
		toNum: function(s) {
			s += '';
			var pm = /^-/.test(s) ? -1 : 1;
			return s.replace(/(\.[^\.]+)\..*$/g, '$1').replace(/[^\d\.]/g, '') * pm;
		},
		$num: function() {
			$(this).text(fmt.toNum($(this).text()));
		},
		strrev: function(s) {
			return s.split('').reverse().join('');
		},
		$strrev: function() {
			$(this).text(fmt.strrev($(this).text()));
		},
		format: function(s) {
			var num = (fmt.toNum(s) + '').split(/\./);
			var res = [];
			res.push(fmt.strrev(fmt.strrev(num[0]).replace(/(\d{3})(?=\d)/g, '$1,')));
			if(num.length > 1) res.push(num[1].replace(/(\d{3})(?=\d)/g, '$1,'));
			return res.join('.');
		},
		$format: function() {
			$(this).text(fmt.format($(this).text()));
		},
		human: function(n, u) {
			n = fmt.toNum(n);
			if(n == 0) return 0;
			if(!u) u = 1000;
			var units = ['', 'k', 'm', 'g', 't', 'p', 'e', 'z', 'y'],
				idx = Math.min(Math.floor(Math.log(this) / Math.log(u)), units.length - 1);
			if(idx == 0) return n;
			return (Math.ceil(n / Math.pow(u, idx) * 100) / 100) + units[idx];
		},
		$human: function() {
			$(this).text(fmt.human($(this).text()));
		},
		strpad: function(s, c, p) {
			s += '';
			if(!p && p != 0) p = '0';
			p = p + '';
			while(s.length < c) s = p + s;
			return s;
		},
		$strpad: function() {
			$(this).text(fmt.strpad($(this).text(), $(this).data('length'), $(this).data('string')));
		}
	};
	return fmt;
});