var gulp = require('gulp');
var path = require('path');
var fs = require('fs');
var typescript = require('gulp-typescript');
var merge = require('merge-stream');
var sourcemaps = require('gulp-sourcemaps');
var count = require('gulp-count');
var clean = require('gulp-clean');

var package = JSON.parse(fs.readFileSync(path.resolve(__dirname, './package.json')));
var SRC_FOLDER = path.resolve(__dirname, 'src');
var DIST_FOLDER = path.resolve(__dirname, 'dist');

var tsProject = typescript.createProject(path.resolve(__dirname, 'tsconfig.json'));

gulp.task(package.name + ':build-ts', function () {
    var tsResult = tsProject.src()
        .pipe(count("'" + package.name + ':build-ts\': ## files'))
        .pipe(sourcemaps.init())
        .pipe(tsProject());

    return merge([
        tsResult.dts.pipe(gulp.dest(DIST_FOLDER)),
        tsResult.js
            .pipe(sourcemaps.write({sourceRoot: path.resolve(__dirname, SRC_FOLDER)}))
            .pipe(gulp.dest(DIST_FOLDER))
    ]);
});

gulp.task(package.name + ':build-copy', function () {
    return gulp.src(['package.json']).pipe(gulp.dest(DIST_FOLDER));
});

gulp.task(package.name + ':dist-clean', function () {
    return gulp.src(DIST_FOLDER, {read: false, allowEmpty: true}).pipe(clean());
});

gulp.task('clean', gulp.series(package.name + ':dist-clean'));
gulp.task('build', gulp.series(package.name + ':build-ts', package.name + ':build-copy'));
gulp.task('default', gulp.series('build'));
