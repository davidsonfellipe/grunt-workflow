module.exports = {
  options: {
    thresholds: {
      weight: 200,
      speed: 5000,
      score: 95,
      requests: 15
    }
  },
  pages: {
    files: [
      {src: 'http://fellipe.com'},
      {src: 'http://fellipe.com/about'},
      {src: 'http://fellipe.com/blog'},
      {src: 'http://fellipe.com/projects'},
      {src: 'http://fellipe.com/talks'}
    ]
  }
};
