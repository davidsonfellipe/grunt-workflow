// This task requires you to have Ruby and Sass installed.
module.exports = {
  dev: {
    options: {
      style: 'expanded'
    },
    files: [{
      expand: true,
      cwd: 'src/scss',
      src: ['*.{scss,sass}'],
      dest: 'build/css',
      ext: '.css'
    }]
  },
  dist: {
    options: {
      style: 'compressed'
    },
    files: [{
      expand: true,
      cwd: 'src/scss',
      src: ['*.{scss,sass}'],
      dest: 'build/css',
      ext: '.css'
    }]
  }
};
