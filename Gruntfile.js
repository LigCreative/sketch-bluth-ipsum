module.exports = function(grunt) {
  
  grunt.loadNpmTasks('grunt-svgstore');

  // config
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'nested'
        },
        files: {
          'assets/style.css': 'assets/scss/style.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 version']
      },
      single_file: {
        src: 'assets/style.css',
        dest: 'assets/style.css'
      }
    },

    cssmin: {
      combine: {
        files: {
          'assets/style.min.css': ['assets/style.css']
        }
      }
    },

    svgstore: {
      options: {
        prefix : 'shape-',
      },
      default : {
        files: {
          'assets/svg-defs.svg': ['assets/svg/*.svg'],
        },
      },
    },

    watch: {
      files: ['*.html'],
      options: {
        livereload: true
      },
      css: {
        files: ['assets/scss/**/*'],
        tasks: ['sass', 'autoprefixer', 'cssmin'],
        options: {
          spawn: false
        }
      },
      grunt: {
        files: ['Gruntfile.js']
      }
    }

  });


  require('load-grunt-tasks')(grunt);
  grunt.registerTask('default', [
    'sass',
    'autoprefixer',
    'cssmin',
    'svgstore',
    'watch'
  ]);

};