var $ = require('gulp-load-plugins')({lazy: true});
var gulp = require('gulp');
var browserSync = require('browser-sync');

// STYLES
gulp.task('styles', function(){
    var css_src = 'assets/scss/**/*.scss'
    var css_dest = 'assets/css'
    console.log('compilator making donuts')
    return gulp
    .src(css_src)
    .pipe($.sass({ outputStyle: 'compressed' })) 
    .pipe($.autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe($.rename({ basename: 'style' }))
    .pipe(gulp.dest(css_dest))
    .pipe(browserSync.reload({
        stream: true
    }))
});

/*// BROWSWER SYNC
gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: './'
        },
    });
});*/


// WATCH
gulp.task('watch', function(){ 
    browserSync({
        server: {
            baseDir: './'
        },
    });
    gulp.watch('assets/scss/**/*.scss', gulp.series('styles'));
    gulp.watch('**/*.html').on('change', browserSync.reload); 
    gulp.watch('**/*.js').on('change', browserSync.reload); 
});
