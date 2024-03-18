module.exports = function(grunt){

    const sass = require('node-sass');
    //configuration

     grunt.initConfig({
        concat: {
            js: {
                src: ['js/*.js'],
                dest: 'dist/scripts.js'
            },
            css: {
                src: ['css/*.css'],
                dest: 'dist/styles.css'
            }
        },
         sass:{
            build:{
                files:[{
                    src:"css/sass/styles.scss",
                    dest:"css/styles.css"
                }],

            },
            options:{implementation:sass, sourceMap:true}
         }
     });


    //Load plugins
     grunt.loadNpmTasks('grunt-contrib-concat');
     grunt.loadNpmTasks('grunt-sass');


     //register tasks
     grunt.registerTask('concat-js', ['concat:js']);
     grunt.registerTask('concat-css', ['concat:css']);
};