// include gulp
// include plug-ins
var gulp = require('gulp'),
	sass = require('gulp-ruby-sass');

// sass task
gulp.task('sass', function() {
	gulp.src('./src/scss/styles.scss')
		.pipe(sass({ sourcemap: true, style: 'expanded' }))
		.pipe(gulp.dest('./css'));
});

gulp.task('default', ['sass'], function() {
	var client = ['sass'];
	// watch for sass
	gulp.watch('./src/scss/**/*.scss', client);
});