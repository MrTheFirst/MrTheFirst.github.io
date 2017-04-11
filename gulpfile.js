'use strict';

var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    rigger = require('gulp-rigger'),
    autoprefixer = require('autoprefixer'),

    sorting = require('postcss-sorting'),
    sortingConfig = require('./posrcss-sorting.config.json'),

    path = {

    build: {
        html: '.',
        js: 'js/',
        css: 'css/',
        img: 'images/'
    },

    src: {
        html: 'src/*.html',
        js: 'src/js/main.js',
        style: 'src/css/styles.css',
        img: 'src/images/'
    }
};

//TODO: css
gulp.task('styles:build', function () {
    var processors = [
        autoprefixer,
        sorting(sortingConfig)
    ];
    return gulp.src(path.src.style)
        .pipe(postcss(processors))
        .pipe(gulp.dest(path.build.css));
});

//TODO: html
gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html));
});

//TODO: js
gulp.task('js:build', function() {
    gulp.src(path.src.js)
        .pipe(gulp.dest(path.build.js));
});

//TODO: build
gulp.task('build', [
    'styles:build',
    'html:build',
    'js:build'
]);

gulp.task('default', ['build']);
