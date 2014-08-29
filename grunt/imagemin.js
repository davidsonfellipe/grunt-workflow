module.exports = {
  options: {
    cache: false
  },
  dist: {
    files: [{
      expand: true,
      cwd: 'src/img',
      src: '{,*/}*.{png,jpg,jpeg}',
      dest: 'build/img'
      }]
  }
};
