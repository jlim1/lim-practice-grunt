// The default task builds the CSS bundle and minifies the sidebar handler.
module.exports = function (grunt) {
    grunt.initConfig({
        cssmin: {
            combine: {
                files: {
                    "html/css/main.css": [
                        "html/css/content.css",
                        "html/css/sidebar.css",
                    ],
                },
            },
        },
        uglify: {
            dist: {
                files: {
                    "html/js/toggle.min.js": ["html/js/toggle.js"],
                },
            },
        },
    });

    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("default", ["cssmin", "uglify"]);
};
