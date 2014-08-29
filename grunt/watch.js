// Hint: newer:taskName - configure Grunt tasks to run with newer files only.

module.exports = {
  scripts: {
      files: ['src/js/*.js', 'src/scss/*.scss'],
      tasks: ['newer:jshint', 'concat', 'newer:uglify'],
      options: {
          nospawn: true,
          debounceDelay: 250,
      },
  },
};
