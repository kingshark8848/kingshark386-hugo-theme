var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    util         = require('gulp-util'),
    cssOutputStyle = "expanded" //compressed

// // test util
// // we can use gulp --production, then use util.env.production to get production value
// console.log(util.env.production);

// Compile SCSS files to CSS
gulp.task("scss", function () {
    // local fonts
    gulp.src(['src/fonts/*'])
    .pipe(gulp.dest('static/fonts/'));

    // bootstrap fonts
    gulp.src(['src/lib/bootstrap-sass/assets/fonts/**/*'])
    .pipe(gulp.dest('static/fonts/'));
    
    //scss
    // single bootstrap.scss
    gulp.src("src/bootstrap.scss")
    .pipe(sass({
        sourceComments: 'map',
        sourceMap: 'sass',
        outputStyle : "expanded"
    }))
    .pipe(gulp.dest("static/css"));


    // kingshark386.scss
    gulp.src("src/kingshark386.scss")
        .pipe(sass({
            sourceComments: 'map',
            sourceMap: 'sass',
            outputStyle : "expanded"
        }))
        .pipe(gulp.dest("static/css"));
})

// Compile JS files to minify-js
gulp.task("minify-js", function () {
    gulp.src("src/lib/jquery/dist/jquery.min.js")
    .pipe(gulp.dest("static/js"))

    gulp.src("src/lib/bootstrap-sass/assets/javascripts/bootstrap.min.js")
        .pipe(gulp.dest("static/js"));
})

// Watch asset folder for changes
gulp.task("watch", ["scss","minify-js"], function () {
    gulp.watch("src/**/*.scss", ["scss","minify-js"])
})

// Set watch as default task
gulp.task("default", ["watch"])