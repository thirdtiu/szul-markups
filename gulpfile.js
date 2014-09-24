// include gulp
// include plug-ins
var gulp = require('gulp'),
	sass = require('gulp-ruby-sass')
	livereload = require('gulp-livereload');

// sass task
gulp.task('sass', function() {
	gulp.src('./src/scss/styles.scss')
		.pipe(sass({ sourcemap: true, style: 'expanded' }))
		.pipe(gulp.dest('./css'))
		.pipe(livereload());
});

gulp.task('default', ['sass'], function() {
	var client = ['sass'];
	// watch for sass
	gulp.watch('./src/scss/**/*.scss', client);
});