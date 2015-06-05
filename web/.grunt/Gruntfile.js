module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                options: {
                    cleancss: true
                },
                files: {
                    '../src/css/style.min.css': '../src/css/less/style.less'
                }
            },
            prodution: {
                files: {
                    '../src/css/style.css': '../src/css/less/style.less'
                }
            }
        },

        uglify: {
          scripts: {
            files: {
              '../src/js/script.min.js': ['../src/js/vendor/*.js', '../src/js/polyfills/*.js', '../src/js/scripts/*.js']
            }
          }
        },

        watch: {
            styles: {
                files: ['../src/css/less/**/*.less', '../src/fonts  /**/*.less'],
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('all', ['less', 'uglify']);
    grunt.registerTask('css', ['less']);
    grunt.registerTask('js', ['uglify']);
};