// Hint: newer:taskName - configure Grunt tasks to run with newer files only.
module.exports = {
  scripts: {
      files: ['<%= path.src %>js/*.js', '<%= path.src %>scss/*.scss'],
      tasks: ['concurrent:join', 'concurrent:lint'],
      options: {
          nospawn: true,
          debounceDelay: 250,
      },
  }
};
