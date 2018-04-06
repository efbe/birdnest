'use strict';

var gulp         = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    del          = require('del'),
    runSequence  = require('run-sequence'),
    sass         = require('gulp-sass'),
    sassLint     = require('gulp-sass-lint'),
    tasks        = require('gulp-task-listing');

var config = {
    devFolder: 'src/assets'
};


// Lists the available gulp tasks
gulp.task('help', tasks);


// Clean generated CSS & min folder
gulp.task('clean', function () {
    return del([
        config.devFolder + '/css/*'
    ]);
});


// Lints SCSS files according to the custom config
gulp.task('lint', function () {
    return gulp.src(config.devFolder + '/**/*.s+(a|c)ss')
        .pipe(sassLint({
            'config': '.sass-lint.yml'
        }))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
});


// Create CSS files from SCSS groups
gulp.task('sass', function () {
    return gulp.src(config.devFolder + '/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.devFolder + '/css'));
});


// Build sass with lint + minify
gulp.task('build-sass', function () {
    runSequence('lint', 'sass');
});


// The de-facto default task
gulp.task('default', function () {
    // place code for your default task here
});
