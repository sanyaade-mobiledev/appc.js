/**
 * Appcelerator Common Library for Node.js
 * Copyright (c) 2012 by Appcelerator, Inc. All Rights Reserved.
 * Please see the LICENSE file for information about licensing.
 */

var fs = require('fs'),
	path = require('path');

function home() 
{
	return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

function exists(f)
{
	// changes in node 0.8.0
	return (fs.existsSync||path.existsSync)(f);
}

function ipaddress()
{
	var ifaces = require('os').networkInterfaces();
	for (var dev in ifaces) 
	{
		var ipaddress;
		ifaces[dev].forEach(function(details)
		{
			if (details.family=='IPv4'&&dev.substring(0,2)!='lo') 
			{
				ipaddress = details.address;
			}
		});
		if (ipaddress) return ipaddress;
	}
}

exports.ipaddress = ipaddress;
exports.exists = exists;
exports.home = home;

