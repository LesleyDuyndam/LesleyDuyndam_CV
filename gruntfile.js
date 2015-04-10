module.exports = function( grunt ){

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: true
            },
            coffee: {
                files: ['src/scripts/coffee/**/*.coffee'],
                tasks: ['coffee']
            },
            less: {
                files: ['src/style/less/**/*.less'],
                tasks: ['less']
            }
        },
        coffee: {
            compile: {
                files: {
                    'dist/scripts/classes.js': 'src/scripts/coffee/classes/**/*.coffee',
                    'dist/scripts/modules.js': 'src/scripts/coffee/modules/**/*.coffee',
                    'dist/scripts/main.js': 'src/scripts/coffee/main.coffee'
                }
            }
        },
        less: {
            development: {
                files: {
                    "dist/styles/style.css": "src/style/less/**/*.less"
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    src: ['dist/styles/style.css'],
                    ext: '.min.css'
                }]
            }
        },
        wiredep: {
            task: {
                src: ['dist/index.html']
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