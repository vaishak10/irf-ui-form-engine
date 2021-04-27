var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('tsScripts', function() {
    return gulp.src('./source/**/*.ts')
        .pipe(ts({
            noImplicitAny: false,
            module: 'AMD',
            moduleResolution:'node',
            target: "es5",
            experimentalDecorators: true,
            removeComments: false,
            noEmitOnError: true,
            lib: [
                "es2015"
            ]
        }))
        .pipe(gulp.dest('./source/tsjs'));
});
