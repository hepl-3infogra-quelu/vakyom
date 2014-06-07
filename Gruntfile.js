"use strict";

module.exports = function( grunt ) {

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks( "grunt-contrib-jshint" );
  grunt.loadNpmTasks( "grunt-contrib-watch" );

  // Project configuration.
  grunt.initConfig( {
    jshint: {
      options: {
        "curly": true,
        "eqeqeq": true,
        "immed": true,
        "latedef": "nofunc",
        "newcap": true,
        "noarg": true,
        "sub": true,
        "undef": true,
        "unused": true,
        "boss": true,
        "eqnull": true,
        "node": true
      },
      lib: {
        src: [ "lib/**/*.js" ]
      },
    },
    watch: {
      lib: {
        files: "<%= jshint.lib.src %>",
        tasks: [ "jshint:lib" ]
      },
    },
  });

  // Default task.
  grunt.registerTask( "default", [ "jshint" ] );
};
