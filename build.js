/**
 * Helper for running multiple tsc builds. Particularly useful for running multiple in watch mode.
 * eg.
 * node build -w server/js client/js
 */

let args = process.argv.slice(2);

// Check for -w arg and strip it if it is there.
let watchIndex = args.indexOf('-w');
let isWatch = watchIndex > -1;
if(isWatch) {
	args.splice(watchIndex, 1);
}

let exec = require('child_process').exec;

// build our TypeScript
tsc(args);

/**
 * Execute a tsc build with given set of project paths.
 */
function tsc(cwdList) {
	if (cwdList.length === 0) {
		return;
	}

	var cwd = cwdList.shift();
	console.log(`************************************************************************\nbuilding '${cwd}'`);
	var p = exec(`tsc${isWatch ? ' -w' : ''} -p .`, { cwd: cwd });
	p.stdout.on('data', function (chunk) {
		console.log(String(chunk));
		if (String(chunk).match(/Compilation complete/)) {
			tsc(cwdList);
		}
	});
	p.on('exit', function () {
		console.log('done.');
		if(!isWatch) {
			tsc(cwdList);
		}
	});
}