// require the gulp tasks and plugins here
// require gulp
const gulp = require('gulp');
// require gulp sass
const sass = require('gulp-sass');
// require gulp image min
const imagemin = require('gulp-imagemin');

// require sass compiler with node
sass.compiler = require('node-sass');

// set the sass task in gulp
gulp.task('sass', function () {
    return gulp.src('styles/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('styles/css/'));
});

// set the task for imagemin
gulp.task('imagemin', () =>
    gulp.src('images/wallpapers/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);

// set the sass watcher in gulp
gulp.task('sass:watch', function () {
    gulp.watch('styles/scss/*.scss', ['sass']);
});

// define default task
gulp.task('default', ['sass', 'sass:watch']);