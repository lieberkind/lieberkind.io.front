var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('index', function() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist/'));
});

/**
 * Take all .scss files from styles/ and convert them to CSS with the compressed
 * output style, rename the file to style.min.css and save it to dist/css
 */
gulp.task('sass', function() {
    return gulp.src('styles/styles.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
    console.log('Doing something to JS files here...');
})

gulp.task('default', ['js', 'html']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['js']);
    gulp.watch('src/index.html', ['index']);
    gulp.watch('styles/**/*.scss', ['sass']);
});
