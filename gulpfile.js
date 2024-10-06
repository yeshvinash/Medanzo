const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task("styles", () => {
  return gulp
    .src("assets/scss/**/*.scss")
    .pipe(sass({outputStyle: "compressed"}))
    .pipe(gulp.dest("assets/css/"));
});

gulp.task("watch", () => {
  gulp.watch("assets/scss/**/*.scss", (file) => {
    gulp.series(["styles"])(file);
  });
});

gulp.task("default", gulp.series(["styles"]));
