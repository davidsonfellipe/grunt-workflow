module.exports = {
  scripts: {
      files: ['src/js/*.js', 'src/scss/*.scss'],
      tasks: ['concat', 'uglify'],
      options: {
          nospawn: true,
          debounceDelay: 250,
      },
  },
};
