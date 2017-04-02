// Gruntfile.js

module.exports = function(grunt) {

    // ===========================================================================
    // CONFIGURE GRUNT ===========================================================
    // ===========================================================================
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'minify/',
                    ext: '.min.css'
                }]
            }
        },

        uglify: {
            options: {
                manage: false
            },
            target: {
                files: {
                    'minify/output.min.js': ['js/*'],
                }
            }
        },

        concat: {
            js: {
                src: ['minify/*.min.js'],
                dest: 'web/js/output.js'
            },
            css: {
                src: ['minify/*.min.css'],
                dest: 'web/css/output.css'
            }
        },

        watch: {
            css: {
                files: 'css/*.css',
                tasks: ['concat']
            },

            js:  {
                files: 'js/*.js',
                tasks: [ 'concat']
            },
        }
    });

    // ===========================================================================
    // LOAD GRUNT PLUGINS ========================================================
    // ===========================================================================
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

};