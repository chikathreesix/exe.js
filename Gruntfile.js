module.exports = function(grunt){
  grunt.initConfig({
    shell: {
      traceur: {
        command: 'traceur --experimental --out build/exe.js src/exe.js'
      }
    },
    watch: {
      js: {
        files: ['src/*.js'],
        tasks: ['shell:traceur'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: ['src/*.scss'],
        tasks: ['compass'],
        options: {
          spawn: false,
        }
      }
    },
    sass: {
      dist: {
        files: {
          'build/exe.css': 'src/exe.scss'
        }
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'src',
          cssDir: 'build'
        }
      }
    },
    connect: {
      browser: {
        options:{
          port: '9999',
          keepalive: true
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['shell:traceur', 'compass']);
}
