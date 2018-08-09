"use strict";

var gulp = require("gulp"),
 sass = require("gulp-sass"),
 csso = require('gulp-csso'),
 autoprefixer = require("gulp-autoprefixer"),
 browserSync = require('browser-sync').create(),
 imagemin = require('gulp-tinypng'),
 notify = require('gulp-notify'),
 plumber = require('gulp-plumber');    

//BROWSER-SYNC
gulp.task('server', ['sass'], function () {
    browserSync.init({
        server: {
            baseDir: "./dist"
        } 
    });
    gulp.watch("./dist/*.html").on('change', browserSync.reload);
});

//HTML
gulp.task("html", function () {
    return gulp.src("./dist/*.html")
        .pipe(gulp.dest("./dist"));
});

//SASS
gulp.task("sass", function () {
    return gulp.src("./src/sass/**/*.scss")
        .pipe(plumber({
        errorHandler: notify.onError(function(err){
            return {
                title: 'Styles',
                message: err.message
            };
        })
    }))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(csso())
        .pipe(gulp.dest("./dist/css"))
        .pipe(browserSync.stream());
});

//IMG
gulp.task("img", function () {
    return gulp.src("./src/img/**/*.*")
        .pipe(gulp.dest("./dist/img"));
});

//SCRIPTS
gulp.task("scripts", function () {
    return gulp.src("./dist/js/*.js");
});

//WATCHES
gulp.task("watch", function () {
    gulp.watch("./src/sass/**/*.scss", ['sass']);
    gulp.watch("./dist/js/*.js", ["scripts"]);
    gulp.watch("./src/img/**/*.*", ["img"]);
}); 

//TINY PNG
gulp.task('imagemin', function () {
    gulp.src('./dist/img/**/*.+(jpg|png)')
        .pipe(imagemin('iz7JbD3qcVT2ACUb9Gx0Bo5PL_qI38iK'))
        .pipe(gulp.dest('./dist/img'));
});

//DEFAULT
gulp.task("default", ["server", "html", "sass", "img", "watch"]);
