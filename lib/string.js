/**
 * Appcelerator Common Library for Node.js
 * Copyright (c) 2012 by Appcelerator, Inc. All Rights Reserved.
 * Please see the LICENSE file for information about licensing.
 */
var colors = require('colors');

function lpad (x, len, ch)
{
	ch = ch || ' ';
	var pre = '';
	var ns = String(x);
	var cur = colors ? colors.stripColors(ns).length : ns.length;
	for (var c=cur;c<len;c++)
	{
		pre+=ch;
	}
	return pre + ns;
}

function rpad (x, len, ch)
{
	ch = ch || ' ';
	var ns = String(x);
	var cur = colors ? colors.stripColors(ns).length : ns.length;
	for (var c=cur;c<len;c++)
	{
		ns+=ch;
	}
	return ns;
}

function trim(line)
{
	return String(line).replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

function capitalize(s) {
	return s.substring(0, 1).toUpperCase() + s.substring(1).toLowerCase();
}

exports.lpad = lpad;
exports.rpad = rpad;
exports.trim = trim;
exports.capitalize = capitalize;
