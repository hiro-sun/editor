
'use strict';

var gulp = require('gulp');
var typescript = require('typescript');
var ts = require('gulp-typescript');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var del = require('del');

var project = ts.createProject('tsconfig.json');


gulp.task('compile', function () {
    var result = gulp.src('src/**/*{ts,tsx}')
        .pipe(ts(project));
    return result.js.pipe(gulp.dest('.tmp'));
});

gulp.task('build', ['compile'], function () {
    var b = browserify('.tmp/startup.js');
    return b.bundle()
        .pipe(source('todo.js'))
        .pipe(gulp.dest('www/js'))
    ;
});

