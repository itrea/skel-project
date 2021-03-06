module.exports = function ( grunt )
{
  grunt.initConfig({
    coffee: {
      compile: {
        files: {
          'dist/js/app.js': [
            'app/coffee/skel.coffee',
            'app/coffee/init.coffee']
        }
      }
    },
    sass: {
      dist: {
        options: {
          sourcemap : 'none',
          noCache   : true
        },
        files: {
          'dist/css/app.css'    : 'app/sass/app.sass',
        }
      }
    },
    jade: {
      dist: {
        files: {
          'dist/index.html' : 'app/jade/index.jade'
        }
      }
    },
    bowercopy: {
      components: {
        files: {
          'dist/js/jquery.js'         : 'jquery/dist/jquery.min.js',
          'dist/js/skel.js'           : 'skel/dist/skel.min.js',
          'dist/js/skel-layout.js'    : 'skel/dist/skel-layout.min.js',
          'dist/js/skel-viewport.js'  : 'skel/dist/skel-viewport.min.js',
          'app/sass/_skel.scss'       : 'skel/dist/_skel.scss'
        }
      }
    },
    watch: {
      coffee: {
        files: ['app/coffee/**/*.coffee'],
        tasks: ['coffee']
      },
      sass: {
        files: ['app/sass/**/*.sass'],
        tasks: ['sass']
      },
      jade: {
        files: ['app/jade/**/*.jade'],
        tasks: ['jade']
      },
      bower: {
        files: ['bower_components/**/*'],
        tasks: ['bowercopy']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-bowercopy');

  grunt.registerTask('default', [ 'bowercopy', 'coffee', 'sass', 'jade', 'watch']);
}
