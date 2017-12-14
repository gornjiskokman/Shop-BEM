module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
        server: {
          options: {
            port: 8080,
            base: './'
          }
        }
      },
    sass: {
      options: {
        style: 'expanded'
      },
      dist: {                            // Target
        files: {                         // Dictionary of files
          'main.css': './src/sass/main.sass',       // 'destination': 'source'
        }
      }
    },
    watch: {
      styles:{
        options:{
          livereload: true,
          spawn: false,
          event: ['added','deleted','changed']
        },
        files:['**/*.sass'],
        tasks:['sass']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  // grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['connect:server', 'sass', 'watch']);
};
