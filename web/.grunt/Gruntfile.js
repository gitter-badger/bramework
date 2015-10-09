module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    sass: {
      production: {
        options: {
          sourcemap: 'none',
          style: 'compressed'
        },
        files: { 
          '../src/css/style.min.css': '../src/css/sass/style.scss'
        }
      },
      development: {
        options: {
          sourcemap: 'none',
          style: 'expanded'
        },
        files: {
          '../src/css/style.css': '../src/css/sass/style.scss'
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

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-notify');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('all', ['sass', 'uglify']);
  grunt.registerTask('css', ['sass']);
  grunt.registerTask('js', ['uglify']);
};