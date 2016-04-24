/*global module:false*/
var fs = require('fs');

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
    dirs: {
	  srcApp: 'public/javascripts/app/scripts',
      srcCss: 'public/stylesheets',
      destApp: 'public/javascripts/dist',
      destCss: 'public/stylesheets/dist'
    },
    concat: {
	  //js
      configs: {
        src: ['<%= dirs.srcApp %>/configs/*.js'],
        dest: '<%= dirs.destApp %>/configs.min.js'	 
      },
      services: {
        src: ['<%= dirs.srcApp %>/services/*.js'],
        dest: '<%= dirs.destApp %>/services.min.js'	 
      },
      filters: {
        src: ['<%= dirs.srcApp %>/filters/*.js'],
        dest: '<%= dirs.destApp %>/filters.min.js'	 
      },
      modules: {
        src: ['<%= dirs.srcApp %>/modules/*.js'],
        dest: '<%= dirs.destApp %>/modules.min.js'	 
      },
      controllers: {
        src: ['<%= dirs.srcApp %>/controllers/*.js'],
        dest: '<%= dirs.destApp %>/controllers.min.js'	 
      },
      directives: {
        src: ['<%= dirs.srcApp %>/directives/*.js'],
        dest: '<%= dirs.destApp %>/directives.min.js'
      },
      vendor: {
              files: {
                '<%= dirs.destApp %>/vendor.js': getFiles([
                    'jquery.min.js',
                    'bootstrap.min.js',
                    'angular.min.js',
                    'angular-route.min.js',
                    'angular-resource.min.js',
                    'angular-cookies.min.js',
                    'spin.js',
                    'angular-spinner.min.js',
                    'angular-loading-spinner.js',
                    'bootbox.js',
                    'angular-flash.min.js',
                    'lodash.min.js',
                    'angularjs-dropdown-multiselect.min.js',
                    'ui-bootstrap-tpls.min.js'
                    ],'public/javascripts/bower_components')
              }
            },
      //css
      css: {
        src: ['<%= dirs.srcCss %>/main.css','<%= dirs.srcCss %>/bootstrap-3.3.5-dist/css/bootstrap.min.css'],
        dest: '<%= dirs.destCss %>/<%= pkg.name %>.min.css'
      }
    },
    uglify: {
      js: {
        files: {
          '<%= dirs.destApp %>/configs.min.js': ['<%= dirs.destApp %>/configs.min.js'],
          '<%= dirs.destApp %>/services.min.js': ['<%= dirs.destApp %>/services.min.js'],
          '<%= dirs.destApp %>/filters.min.js': ['<%= dirs.destApp %>/filters.min.js'],
          '<%= dirs.destApp %>/modules.min.js': ['<%= dirs.destApp %>/modules.min.js'],
          '<%= dirs.destApp %>/controllers.min.js': ['<%= dirs.destApp %>/controllers.min.js']
        }
      }
    },
    cssmin: {
      css: {
        keepSpecialComments: 0,
        files: {
          '<%= dirs.destCss %>/<%= pkg.name %>.min.css': ['<%= dirs.destCss %>/<%= pkg.name %>.min.css']
        }
      }
    },
    watch: {
      files: [
		'<%= dirs.srcApp %>/*/*.js',
		'<%= dirs.srcCss %>/main.css',
		'<%= dirs.srcCss %>/bootstrap-3.3.5-dist/css/bootstrap.min.css'
      ],
      tasks: ['concat','uglify','cssmin']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['concat','uglify','cssmin','watch']);
};

function getFiles (dependencies, dir){
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            if(endsWith(name,'demo')){
                return dependencies;
            }
            getFiles(dependencies, name/*, files_*/);
        } else {
            var indexOf = dependencies.indexOf(files[i]);
            if (indexOf != -1){
                dependencies[indexOf] = name;
            }
        }
    }
    return dependencies;
}

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}