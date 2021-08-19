var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('build', function() {
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

var templateCacheFile = 'dist/template.js';
var destFolder = "dist/controller.js"


gulp.task('templates', function(){
    return gulp.src('source/templates/**/*.html')
        .pipe(html2js(templateCacheFile, {
            adapter: 'angular',
            base: '.',
            name: 'uiFormEngine',
            rename: function(moduleName){
                return "irf/" + moduleName;
            }
        }))
        .pipe(gulp.dest(destFolder))
});

gulp.task('controllers', function(){
    var jsFiles = gulp.src(['source/controllers/**/*.js']);
    return jsFiles.pipe(concat(outJsFileName))
        //.pipe(print())
        .pipe(insert.transform(function(contents, file){
            return contents;
        }))
        .pipe(gulp.dest(destFolder))
});

