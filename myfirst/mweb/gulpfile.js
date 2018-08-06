const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const rollup = require('gulp-rollup');
const repalce = require('rollup-plugin-replace');
const gulpSequence = require('gulp-sequence');

gulp.task('builddev', () => {
        // 开发环境watch
        return watch('./src/nodeuii/**/*.js', { ignoreInitial: false }, () => {
            gulp.src('./src/nodeuii/**/*.js').pipe(babel({
                    babelrc: false,
                    "plugins": [
                        "transform-es2015-modules-commonjs"
                    ]
                }))
                .pipe(gulp.dest('dist'));
        })

    })
    // 上线环境不需要watch
gulp.task('buildprod', () => {
    gulp.src('./src/nodeuii/**/*.js').pipe(babel({
            babelrc: false,
            // 忽略这个文件，此文件需要清洗
            ignore: ["./src/nodeuii/config/index.js"],
            "plugins": [
                "transform-es2015-modules-commonjs"
            ]
        }))
        .pipe(gulp.dest('dist'));
})

//开启清洗流
gulp.task('buildconfig'), () => {
    gulp.src('./src/nodeuii/**/*.js')
        .pipe(rollup({
            output: {
                format: 'cjs'
            },
            input: './src/nodeuii/config/index.js',
            plugins: [
                replace({
                    "process.env.NODE_ENV": JSON.stringify('production')
                })
            ]
        }))
        .pipe(gulp.dest('./dist'));

}

let _task = ["builddev"];
if (process.env.NODE_ENV == 'production') {
    // 为了保证执行逻辑顺序，引入gulp-sequence
    _task = gulpSequence(["buildprod", "buildconfig"]);
}
gulp.task('default', _task);