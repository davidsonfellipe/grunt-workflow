// Hint: newer:taskName - configure Grunt tasks to run with newer files only.
module.exports = {
  scripts: {
      files: ['<%= path.src %>js/*.js', '<%= path.src %>scss/*.scss'],
      tasks: ['newer:jshint', 'concat', 'newer:uglify', 'newer:sass'],
      options: {
          nospawn: true,
          debounceDelay: 250,
      },
  }
};
