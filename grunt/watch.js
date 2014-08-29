module.exports = {
    scripts: {
        files: ['src/js/*.js', 'src/scss/*.scss'],
        tasks: ['concat'],
        options: {
            nospawn: true,
            debounceDelay: 250,
        },
    },
};
