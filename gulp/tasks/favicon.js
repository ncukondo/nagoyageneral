var gulp = require("gulp");
var config = require('../config').favicon;
var realFavicon = require ('gulp-real-favicon');
var fs = require('fs');
var rename = require('gulp-rename')


// Generate the icons. This task takes a few seconds to complete.
// You should run it at least once to create the icons. Then,
// you should run it whenever RealFaviconGenerator updates its
// package (see the check-for-favicon-update task below).
gulp.task('favicon', function(done) {
	realFavicon.generateFavicon({
		masterPicture: config.masterPicture,
		dest: config.dest,
		iconsPath: config.htmlToFavicon,
		design: {
			ios: {
				pictureAspect: 'backgroundAndMargin',
				backgroundColor: '#ffffff',
				margin: '14%'
			},
			desktopBrowser: {},
			windows: {
				pictureAspect: 'noChange',
				backgroundColor: '#da532c',
				onConflict: 'override'
			},
			androidChrome: {
				pictureAspect: 'shadow',
				themeColor: '#ffffff',
				manifest: {
					name: config.siteName,
					display: 'browser',
					orientation: 'notSet',
					onConflict: 'override',
					declared: true
				}
			},
			safariPinnedTab: {
				pictureAspect: 'silhouette',
				themeColor: '#5bbad5'
			}
		},
		settings: {
			scalingAlgorithm: 'Mitchell',
			errorOnImageTooSmall: false
		},
		markupFile: config.dataJson
	}, function() {
    console.log("making htmlfile....");
    injectFaviconMarkups();
		done();
	});

});

// Inject the favicon markups in your HTML pages. You should run
// this task whenever you modify a page. You can keep this task
// as is or refactor your existing HTML pipeline.
gulp.task('inject-favicon-markups', function() {
	injectFaviconMarkups();
});

function injectFaviconMarkups(){
  gulp.src(config.htmlSrc)
    .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(config.dataJson)).favicon.html_code))
    .pipe(rename(config.htmlDestFileName))
    .pipe(gulp.dest(config.htmlDest));
}

// Check for updates on RealFaviconGenerator (think: Apple has just
// released a new Touch icon along with the latest version of iOS).
// Run this task from time to time. Ideally, make it part of your
// continuous integration system.
gulp.task('check-for-favicon-update', function(done) {
	var currentVersion = JSON.parse(fs.readFileSync(config.dataJson)).version;
	realFavicon.checkForUpdates(currentVersion, function(err) {
		if (err) {
			throw err;
		}
	});
});
