module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      production: {
        options: {
          cleancss: true,
          compress: true
        },
        files: {
          '../src/css/style.min.css': '../src/css/less/style.less'
        }
      },
      development: {
        files: {
          '../src/css/style.css': '../src/css/less/style.less'
        }
      }
    },

    uglify: {
      scripts: {
        files: {
          '../src/js/script.min.js': [ '../src/js/scripts/_globals.js',  '../src/js/scripts/*.js', '../src/js/vendor/*.js', '../src/js/polyfills/*.js']
        }
      }
    },

    watch: {
      styles: {
        files: ['../src/css/less/**/*.less'],
        tasks: ['less']
      },
      scripts: {
        files: ['../src/js/scripts/*.js', '../src/js/vendor/*.js', '../src/js/polyfills/*.js'],
        tasks: ['uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-notify');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('all', ['less', 'uglify']);
  grunt.registerTask('css', ['less']);
  grunt.registerTask('js', ['uglify']);
};