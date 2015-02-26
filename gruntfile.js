module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ['scripts/coffee/**/*.js'],
                tasks: ['coffee']
            },
            css: {
                files: '**/*.less',
                tasks: ['less']
            },
            minify: {
                files: ['scripts/css/**/*.css'],
                task:  ['cssmin']
            }
        },
        coffee: {
            compile: {
                files: {
                    'scripts/javascript/compiled_Coffee.js': ['scripts/coffee/**/*.coffee'] // compile and concat into single file
                }
            }
        },
        less: {
            development: {
                files: {
                    "style/css/style.css": "style/less/**/*.less"
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'style/css',
                    src: ['style/css/**/*.css', '!*.min.css'],
                    dest: 'style/css',
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['watch']);

};