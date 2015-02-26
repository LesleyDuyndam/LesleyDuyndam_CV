module.exports = function( grunt ){

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: true
            },
            coffee: {
                files: ['scripts/coffee/**/*.coffee'],
                tasks: ['coffee']
            },
            less: {
                files: ['style/less/**/*.less'],
                tasks: ['less']
            }
        },
        coffee: {
            compile: {
                files: {
                    'scripts/javascript/compiled_coffee.js': ['scripts/coffee/**/*.coffee'] // compile and concat into single file
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
                    src: ['style/css/style.css'],
                    ext: '.min.css'
                }]
            }
        },
        wiredep: {
            task: {
                src: ['index.html']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-wiredep');

    // Default task(s).
    grunt.registerTask('default', ['watch']);

};