/**
 * Appcelerator Common Library for Node.js
 * Copyright (c) 2012 by Appcelerator, Inc. All Rights Reserved.
 * Please see the LICENSE file for information about licensing.
 */

var fs = require('fs'),
	path = require('path'),
	tildeRegExp = /^(~)(\/.*)?$/,
	winEnvVarRegExp = /(%([^%]*)%)/g;

function home() {
	return process.env[process.platform == 'win32' ? 'USERPROFILE' : 'HOME'];
}

function exists(p) {
	// changes in node 0.8.0
	return (fs.existsSync||path.existsSync)(arguments.length > 1 ? path.join.apply(null, arguments) : p);
}

function resolvePath(p) {
	return p.replace(tildeRegExp, home() + '/').replace(winEnvVarRegExp, function(s, m, n) {
		return process.platform == 'win32' && process.env[n] || m;
	});
}

function ipaddress() {
	var ifaces = require('os').networkInterfaces();
	for (var dev in ifaces) {
		var ipaddress;
		ifaces[dev].forEach(function(details) {
			if (details.family=='IPv4'&&dev.substring(0,2)!='lo') {
				ipaddress = details.address;
			}
		});
		if (ipaddress) return ipaddress;
	}
}

function mix(dest) {
	var i = 1,
		l = arguments.length,
		p,
		src;
	dest || (dest = {});
	while (i < l) {
		src = arguments[i++];
		for (p in src) {
			src.hasOwnProperty(p) && (dest[p] = src[p]);
		}
	}
	return dest;
}

exports.ipaddress = ipaddress;
exports.exists = exists;
exports.home = home;
exports.resolvePath = resolvePath;
exports.mix = mix;
