var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

//sass tasks
gulp.task('sass', function(){
  //return all scss files in public folder
  return gulp.src('public/scss/*.scss')
  .pipe(sass({outputStyle:'compressed',sourceComments:'map'},{errLogToConsole:true}))
  .pipe(prefix("last 2 versions","> 1%","ie 8","Android 2","Firefox ESR"))
  .pipe(gulp.dest('public/css'))
  .pipe(reload({stream:true}))
})

//browser-sync task
gulp.task('browser-sync',['nodemon'], function(){
  browserSync.init(null,{proxy:"http://localhost:5000",port:3000});
})

//nodemon tasks
gulp.task('nodemon',function (cb) {
    var callbackCalled = false;
    return nodemon({
      script: 'bin/www',
      ext:'js',
      legacyWatch:true,
      ignore:["public/js/modules/**"]
     }).on('start', function() {
      if(!callbackCalled) {
        callbackCalled = true;
        cb();
      }
    })
})


gulp.task('watch', function(){
  gulp.watch(["views/pages/**/*.scss"],["sass"]); //watch all sass files in pages folder
  gulp.watch(["public/scss/*.scss"],["sass"]);  //watch main sass file in public folder
  gulp.watch(["public/js/custom_script/*.js"],reload); //watch custom scripts and reload
  gulp.watch(["views/**/**/*.ejs"],reload); // watch all ejs files in views
});


//default task
gulp.task('default',['sass','browser-sync','watch'])
