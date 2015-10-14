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
    
    autoprefixer: {
      options:{
        browsers: ['last 2 version','ie 9']
      },
      main: {
        src: ['../src/css/style.css', '../src/css/style.min.css']
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
        files: ['../src/css/sass/**/*.scss'],
        tasks: ['sass', 'autoprefixer']
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
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-notify');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('all', ['sass', 'autoprefixer', 'uglify']);
  grunt.registerTask('css', ['sass', 'autoprefixer']);
  grunt.registerTask('auto', ['autoprefixer']);
  grunt.registerTask('js', ['uglify']);
};