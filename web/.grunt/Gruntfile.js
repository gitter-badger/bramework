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

        watch: {
            styles: {
                files: ['../src/css/less/**/*.less', '../src/fonts  /**/*.less'],
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('all', ['less']);
    grunt.registerTask('css', ['less']);
};