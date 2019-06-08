var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    gulp.src('app/scss/**/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('app/css'))
    return gulp.src('node_modules/swiper/dist/css/swiper.css')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('app/css'))
});

gulp.task('js', function(){
    return gulp.src('node_modules/swiper/dist/js/swiper.js')
        .pipe(gulp.dest('app/js'))
});

gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('node_modules/swiper/dist/css/swiper.css', gulp.series('sass'));
    gulp.watch('node_modules/swiper/dist/js/swiper.js', gulp.series('js'));
  // Other watchers
})

gulp.task('build', gulp.parallel(['sass', 'js']))

