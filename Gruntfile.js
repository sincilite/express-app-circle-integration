'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            all : {
                src : ["config/**/*.js", "config/*.js"],
            },
            options: {
                jshintrc: '.jshintrc'
            }
        },
        jscs: {
            all : {
                src : ["config/**/*.js", "config/*.js"],
            },
            options: {
                preset: "jquery",
                config: ".jscsrc",
                fix: false // Autofix code style violations when possible.
            }
        }
    });

    // Load the plugins as tasks
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks("grunt-jscs");

    // Default task(s).
    grunt.registerTask("lint", ["newer:jshint:all", "newer:jscs:all"]);
    grunt.registerTask("build", ["lint", "newer:uglify"]);
    grunt.registerTask("test", ["jshint", "jscs"]);

};