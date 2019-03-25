var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

gulp.task('sass', function() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
})

gulp.task('watch', function() {
    return gulp.watch('./src/scss/**/*.scss', gulp.series('sass'))
})

gulp.task('server', function() {
    return gulp.src('src')
        .pipe(webserver({
            port: 6698,
            livereload: true,
            proxies: [{
                source: '/api/list',
                target: 'http://localhost:3000/api/list'
            }]
        }))
})

gulp.task('dev', gulp.series('sass', 'server', 'watch'))