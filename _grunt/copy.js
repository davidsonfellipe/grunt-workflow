module.exports = {
  main: {
    expand: true,
    src: '<%= path.src %>index.html',
    dest: '<%= path.dest %>',
    flatten: true,
    filter: 'isFile'
  }
};
